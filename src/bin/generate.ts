/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { generateFiles } from './generateFiles';
import { namespaces, mirrors } from '../namespaces';

generateFiles(namespaces, { mirrors });
