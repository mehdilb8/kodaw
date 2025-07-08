import { blogMeta as blog1 } from '../posts/agence-creation-site';
import {blogMeta as blog2} from '../posts/agencedecreationdesitewebàlyon'
import {blogMeta as blog3} from '../posts/AgenceCréationdeSiteWebàLyonseo'
import { blogMeta as blog4 } from '../posts/site-web-lyon-erreurs';
export const blogPosts = [blog1,blog2,blog3,blog4];
export const getBlogById = (id: string) => blogPosts.find(b => b.id === id);
