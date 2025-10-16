import { blogMeta as blog1 } from '../posts/agence-creation-site';
import {blogMeta as blog2} from '../posts/agencedecreationdesitewebàlyon'
import {blogMeta as blog3} from '../posts/AgenceCréationdeSiteWebàLyonseo'
import { blogMeta as blog4 } from '../posts/site-web-lyon-erreurs';
import { blogMeta as blog5 } from '../posts/strategie-croissance-digitale-lyon';
import { blogMeta as blog6 } from '../posts/developpement-saas-sur-mesure-roi-200-pourcent';
import { blogMeta as blog7 } from '../posts/saas-sur-mesure-acceleration-developpement';
import { blogMeta as blog8 } from '../posts/developpement-saas-sur-mesure-2024-startups-10m';
import { blogMeta as blog9 } from '../posts/saas-sur-mesure-productivite-47-pourcent';
import { blogMeta as blog10 } from '../posts/touche-shift-localisation-mac-pc-2025';
import { blogMeta as blog11 } from '../posts/ou-se-trouve-touche-shift-guide-visuel';
export const blogPosts = [blog1,blog2,blog3,blog4,blog5,blog6,blog7,blog8,blog9,blog10,blog11];
export const getBlogById = (id: string) => blogPosts.find(b => b.id === id);
