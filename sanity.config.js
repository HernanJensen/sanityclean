import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'cssktest',

  projectId: '9pp0zneq',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(), 
    media()
  ],

  schema: {
    types: schemaTypes,
  },
 
  document: {
    // la funcion productionURl es para que cuando se haga click en el boton de preview en el panel de sanity, se abra la pagina en el navegador
    productionUrl: async (prev, {document}) => {
      
      if(document._type == 'post' && document.slug){
        return `https://csskillertest.sanity.studio/structure/post/${document.slug.current}`
      }

      return prev
    },

  }
})
