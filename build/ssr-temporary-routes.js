
      // The file is provisional，don't depend on it 
        export const FeRoutes = [{"path":"/","component": function dynamicComponent () {
            return import(/* webpackChunkName: "index" */ '@/pages/index/render.tsx')
          }
          ,"webpackChunkName":"index","fetch": () => import(/* webpackChunkName: "index-fetch" */ '@/pages/index/fetch.ts')}] 
        export { default as App } from "@/components/layout/App.tsx"
        
        export * from "@/store/index.ts"
        

        