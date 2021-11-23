import { Provide } from '@midwayjs/decorator';
import { BizError, ErrorCodeEnum } from '@/common';
import { parseToken } from '@/common';
import { UserModel } from '@/entity/User';
import { User } from '@/entity/User/interface';
import { UserServiceImpl } from './';

@Provide('UserService')
export class UserService implements UserServiceImpl {
  /**
   * 注册
   * @param user User
   * @returns {User}
   */
  public async register(user: User): Promise<User> {
    await this.queryUserByName(user.name);
    const res = await UserModel.create(user);
    res.password = null;
    return res;
  }

  /**
   * 根据userId查询用户信息
   * @param userId string
   * @return {User}
   */
  public async queryByUserId(userId: string): Promise<User> {
    if (!userId) {
      throw new BizError('用户缺少参数：userId', ErrorCodeEnum.REQUIRED_ARGUMENUT);
    }

    const user = UserModel.findOne({ userId }, { password: 0, _id: 0, __v: 0 });
    if (!user) {
      throw new BizError('用户不存在', ErrorCodeEnum.NOT_FOUND);
    }
    return user;
  }

  /**
   * 根据name查用户
   * @param name string
   * @returns {User}
   */
  public async queryUserByName(name: string): Promise<void> {
    const user = await UserModel.findOne({ name });
    if (user) {
      throw new BizError('用户名已存在', ErrorCodeEnum.EXSIT_DATA);
    }
  }

  /**
   * 查询用户基础信息
   * @param userId string
   * @returns
   */
  async queryMyBasicInfo(userId: string): Promise<CommonObj> {
    const user = await UserModel.findOne({ userId });
    const basicInfo: CommonObj = user.queryMyBasicInfo();
    return basicInfo;
  }

  /**
   * 更新用户信息
   * @param userId
   * @param updateDto
   */
  async updateUser(userId: string, updateDto: Partial<User>): Promise<User> {
    const { name } = await this.queryByUserId(userId);
    if (updateDto.name && updateDto.name !== name) {
      await this.queryUserByName(updateDto.name);
    }
    const updateUser = await UserModel.findOneAndUpdate({ userId }, updateDto, {
      runValidators: true,
      new: true,
    });
    return updateUser;
  }

  /**
   * 根据token查询用户信息
   * @param token
   */
  async getUserInfo(token: string): Promise<User> {
    if (!token) {
      throw new BizError('token不存在', ErrorCodeEnum.REQUIRED_ARGUMENUT);
    }
    const { userId }: CommonObj = parseToken(token);
    return this.queryByUserId(userId);
  }
}
