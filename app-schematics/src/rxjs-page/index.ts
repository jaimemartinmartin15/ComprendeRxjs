import { strings } from '@angular-devkit/core';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree, apply, mergeWith, move, template, url } from '@angular-devkit/schematics';
import { Schema } from './schema';

const RXJS_ROUTING_MODULE_PATH = './src/app/rxjs-layout-page/rxjs-layout-page-routing.module.ts';

export function rxjsPage({ name }: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // create the new files
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        name,
        date: `${new Date().getDate()} de ${new Date().toLocaleDateString('es-ES', { month: 'long' })} de ${new Date().getFullYear()}`,
        ...strings,
      }),
      move('src/app'),
    ]);

    // add new path to the component in the routing module
    let rxjsRoutingModule: string = tree.read(RXJS_ROUTING_MODULE_PATH)!.toString();
    let indexToInsert = rxjsRoutingModule.indexOf('children: [') + 11;
    rxjsRoutingModule = `${rxjsRoutingModule.slice(0, indexToInsert)}
      {
        path: '${name}',
        loadChildren: () => import('../${dasherize(name)}/${dasherize(name)}.module').then((m) => m.${classify(name)}Module),
      },${rxjsRoutingModule.slice(indexToInsert)}`;
    tree.overwrite(RXJS_ROUTING_MODULE_PATH, rxjsRoutingModule);

    return mergeWith(sourceParametrizedTemplates);
  };
}
