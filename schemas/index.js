
import siteSettings from './siteSettings'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import pageType from './pageType'
import header from './header'
import homePage from './homePage'
import aboutPage from './aboutPage'

// field types
import {linkType} from './fieldTypes/linkType'
import {formType} from './fieldTypes/formType'
import {heroType} from './fieldTypes/heroType'
import {imageGalleryType} from './fieldTypes/imageGalleryType'
import {textWithIllustrationType} from './fieldTypes/textWithIllustrationType'
import {videoType} from './fieldTypes/videoType'
import {SEOfields} from './fieldTypes/SEOfields'

// templates
import {homeTemp} from './templates/homeTemp'
import {pageTemp} from './templates/pageTemp'
import {aboutTemp} from './templates/aboutTemp'


export const schemaTypes = [
  siteSettings,
  pageType,
  post,
  author,
  category,
  blockContent,
  header,
  homePage,
  aboutPage,
  
  linkType,
  heroType,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  videoType,
  SEOfields,

  homeTemp,
  pageTemp,
  aboutTemp

]



