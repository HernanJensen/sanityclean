
//Aqui se definen los tipos de documentos que se van a mostrar en el panel de Sanity

export const structure = (S, context) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Global')
        .child(
          S.list()
            .title('Global')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(
                  S.editor()
                    .id('siteSettings')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Site Settings')
                ),
              S.listItem()
                .title('Header')
                .child(
                  S.document()
                    .id('header')
                    .schemaType('header')
                    .documentId('header')
                    .title('Header')
                ),
            ])
        ),

      S.divider(),
      
      S.listItem()
        .title('Home')
        .child(
          S.document()
            .id('home')
            .schemaType('home')
            .documentId('home')
            .title('Home')
        ),
      S.listItem()
        .title('About')
        .child(
          S.document()
            .id('about')
            .schemaType('about')
            .documentId('about')
            .title('About')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('page')
            .title('Pages')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('page')
            )
        ),
      S.listItem()
        .title('Posts')
        .child(
          S.documentTypeList('post')
            .title('Posts')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                
            )
        
        ),
        
      S.divider(),
      //Aquí se filtran los documentos que no se quieren mostrar en la lista principal del panel (Contenido)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            'page',
            'post',
            'media.tag',
            'header',
            'home',
            'about'
          ].includes(listItem.getId())
      ),
    ],)
    
