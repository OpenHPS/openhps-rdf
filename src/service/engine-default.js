module.exports = function(variables) {
function getVariableValue(name) {
  if (!variables || !(name in variables)) {
    throw new Error('Undefined variable: ' + name);
  }
  return variables[name];
}
const df_421_1 = new (require('@comunica/logger-void').LoggerVoid)();
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init__3_0_0_components_ActorInit_jsonld_ActorInit_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/^3.0.0/components/ActorInit.jsonld#ActorInit_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/^3.0.0/components/ActorContextPreprocess.jsonld#ActorContextPreprocess_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_hash_bindings__3_0_0_components_ActorHashBindings_jsonld_ActorHashBindings_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-hash-bindings/^3.0.0/components/ActorHashBindings.jsonld#ActorHashBindings_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_parse__3_0_0_components_ActorQueryParse_jsonld_ActorQueryParse_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-parse/^3.0.0/components/ActorQueryParse.jsonld#ActorQueryParse_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/^3.0.0/components/ActorOptimizeQueryOperation.jsonld#ActorOptimizeQueryOperation_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-result-serialize/^3.0.0/components/ActorQueryResultSerialize.jsonld#ActorQueryResultSerialize_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference__3_0_0_components_ActorDereference_jsonld_ActorDereference_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-dereference/^3.0.0/components/ActorDereference.jsonld#ActorDereference_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify_hypermedia__3_0_0_components_ActorQuerySourceIdentifyHypermedia_jsonld_ActorQuerySourceIdentifyHypermedia_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-source-identify-hypermedia/^3.0.0/components/ActorQuerySourceIdentifyHypermedia.jsonld#ActorQuerySourceIdentifyHypermedia_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference_rdf__3_0_0_components_ActorDereferenceRdf_jsonld_ActorDereferenceRdf_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-dereference-rdf/^3.0.0/components/ActorDereferenceRdf.jsonld#ActorDereferenceRdf_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_entries_sort__3_0_0_components_ActorRdfJoinEntriesSort_jsonld_ActorRdfJoinEntriesSort_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join-entries-sort/^3.0.0/components/ActorRdfJoinEntriesSort.jsonld#ActorRdfJoinEntriesSort_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata__3_0_0_components_ActorRdfMetadata_jsonld_ActorRdfMetadata_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata/^3.0.0/components/ActorRdfMetadata.jsonld#ActorRdfMetadata_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_selectivity__3_0_0_components_ActorRdfJoinSelectivity_jsonld_ActorRdfJoinSelectivity_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join-selectivity/^3.0.0/components/ActorRdfJoinSelectivity.jsonld#ActorRdfJoinSelectivity_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata-accumulate/^3.0.0/components/ActorRdfMetadataAccumulate.jsonld#ActorRdfMetadataAccumulate_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html__3_0_0_components_ActorRdfParseHtml_jsonld_ActorRdfParseHtml_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse-html/^3.0.0/components/ActorRdfParseHtml.jsonld#ActorRdfParseHtml_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse/^3.0.0/components/ActorRdfParse.jsonld#ActorRdfParse_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links__3_0_0_components_ActorRdfResolveHypermediaLinks_jsonld_ActorRdfResolveHypermediaLinks_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-hypermedia-links/^3.0.0/components/ActorRdfResolveHypermediaLinks.jsonld#ActorRdfResolveHypermediaLinks_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_queue__3_0_0_components_ActorRdfResolveHypermediaLinksQueue_jsonld_ActorRdfResolveHypermediaLinksQueue_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-hypermedia-links-queue/^3.0.0/components/ActorRdfResolveHypermediaLinksQueue.jsonld#ActorRdfResolveHypermediaLinksQueue_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata-extract/^3.0.0/components/ActorRdfMetadataExtract.jsonld#ActorRdfMetadataExtract_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-serialize/^3.0.0/components/ActorRdfSerialize.jsonld#ActorRdfSerialize_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_hypermedia__3_0_0_components_ActorRdfUpdateHypermedia_jsonld_ActorRdfUpdateHypermedia_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-update-hypermedia/^3.0.0/components/ActorRdfUpdateHypermedia.jsonld#ActorRdfUpdateHypermedia_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_quads__3_0_0_components_ActorRdfUpdateQuads_jsonld_ActorRdfUpdateQuads_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-update-quads/^3.0.0/components/ActorRdfUpdateQuads.jsonld#ActorRdfUpdateQuads_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus = new (require('@comunica/bus-query-operation').BusQueryOperation)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/^3.0.0/components/ActorQueryOperation.jsonld#ActorQueryOperation_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-process/^3.0.0/components/ActorQueryProcess.jsonld#ActorQueryProcess_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http/^3.0.0/components/ActorHttp.jsonld#ActorHttp_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_fallback_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http/^3.0.0/components/ActorHttp.jsonld#ActorHttp_fallback_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify__3_0_0_components_ActorQuerySourceIdentify_jsonld_ActorQuerySourceIdentify_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-source-identify/^3.0.0/components/ActorQuerySourceIdentify.jsonld#ActorQuerySourceIdentify_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/^3.0.0/components/ActorRdfJoin.jsonld#ActorRdfJoin_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/^3.0.0/components/ActorHttpInvalidate.jsonld#ActorHttpInvalidate_default_bus'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_merge_bindings_context__3_0_0_components_ActorMergeBindingsContext_jsonld_ActorMergeBindingsContext_default_bus = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-merge-bindings-context/^3.0.0/components/ActorMergeBindingsContext.jsonld#ActorMergeBindingsContext_default_bus'
});
const urn_comunica_default_context_preprocess_actors_convert_shortcuts = new (require('@comunica/actor-context-preprocess-convert-shortcuts').ActorContextPreprocessConvertShortcuts)({
  'contextKeyShortcuts': {"baseIRI":"@comunica/actor-init-query:baseIRI","datetime":"@comunica/actor-http-memento:datetime","destination":"@comunica/bus-rdf-update-quads:destination","explain":"@comunica/actor-init-query:explain","extensionFunctionCreator":"@comunica/actor-init-query:extensionFunctionCreator","extensionFunctions":"@comunica/actor-init-query:extensionFunctions","fetch":"@comunica/bus-http:fetch","functionArgumentsCache":"@comunica/actor-init-query:functionArgumentsCache","httpAuth":"@comunica/bus-http:auth","httpBodyTimeout":"@comunica/bus-http:http-body-timeout","httpIncludeCredentials":"@comunica/bus-http:include-credentials","httpProxyHandler":"@comunica/actor-http-proxy:httpProxyHandler","httpRetryCount":"@comunica/bus-http:http-retry-count","httpRetryDelay":"@comunica/bus-http:http-retry-delay","httpRetryOnServerError":"@comunica/bus-http:http-retry-on-server-error","httpTimeout":"@comunica/bus-http:http-timeout","initialBindings":"@comunica/actor-init-query:initialBindings","lenient":"@comunica/actor-init-query:lenient","log":"@comunica/core:log","noCache":"@comunica/actor-init-query:noCache","queryFormat":"@comunica/actor-init-query:queryFormat","queryTimestamp":"@comunica/actor-init-query:queryTimestamp","readOnly":"@comunica/bus-query-operation:readOnly","recoverBrokenLinks":"@comunica/bus-http-wayback:recover-broken-links","sources":"@comunica/actor-init-query:querySourcesUnidentified","traverse":"@comunica/bus-query-source-identify:traverse","unionDefaultGraph":"@comunica/bus-query-operation:unionDefaultGraph"},
  'name': 'urn:comunica:default:context-preprocess/actors#convert-shortcuts',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus
});
const urn_comunica_default_context_preprocess_actors_set_defaults = new (require('@comunica/actor-context-preprocess-set-defaults').ActorContextPreprocessSetDefaults)({
  'logger': df_421_1,
  'name': 'urn:comunica:default:context-preprocess/actors#set-defaults',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus
});
const urn_comunica_default_context_preprocess_actors_source_to_destination = new (require('@comunica/actor-context-preprocess-source-to-destination').ActorContextPreprocessSourceToDestination)({
  'name': 'urn:comunica:default:context-preprocess/actors#source-to-destination',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus
});
const urn_comunica_default_context_preprocess_actors_query_source_skolemize = new (require('@comunica/actor-context-preprocess-query-source-skolemize').ActorContextPreprocessQuerySourceSkolemize)({
  'name': 'urn:comunica:default:context-preprocess/actors#query-source-skolemize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus
});
const urn_comunica_default_context_preprocess_mediators_main = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'name': 'urn:comunica:default:context-preprocess/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus
});
const urn_comunica_default_hash_bindings_actors_sha1 = new (require('@comunica/actor-hash-bindings-sha1').ActorHashBindingsSha1)({
  'name': 'urn:comunica:default:hash-bindings/actors#sha1',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_hash_bindings__3_0_0_components_ActorHashBindings_jsonld_ActorHashBindings_default_bus
});
const urn_comunica_default_hash_bindings_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:hash-bindings/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_hash_bindings__3_0_0_components_ActorHashBindings_jsonld_ActorHashBindings_default_bus
});
const urn_comunica_default_query_parse_actors_sparql = new (require('@comunica/actor-query-parse-sparql').ActorQueryParseSparql)({
  'prefixes': {"dbpedia":"http://dbpedia.org/resource/","dbpedia-owl":"http://dbpedia.org/ontology/","dbpprop":"http://dbpedia.org/property/","dc":"http://purl.org/dc/terms/","dc11":"http://purl.org/dc/elements/1.1/","dcterms":"http://purl.org/dc/terms/","foaf":"http://xmlns.com/foaf/0.1/","geo":"http://www.w3.org/2003/01/geo/wgs84_pos#","owl":"http://www.w3.org/2002/07/owl#","rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","rdfs":"http://www.w3.org/2000/01/rdf-schema#","schema":"http://schema.org/","skos":"http://www.w3.org/2008/05/skos#","xsd":"http://www.w3.org/2001/XMLSchema#"},
  'name': 'urn:comunica:default:query-parse/actors#sparql',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_parse__3_0_0_components_ActorQueryParse_jsonld_ActorQueryParse_default_bus
});
const urn_comunica_default_query_parse_actors_graphql = new (require('@comunica/actor-query-parse-graphql').ActorQueryParseGraphql)({
  'name': 'urn:comunica:default:query-parse/actors#graphql',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_parse__3_0_0_components_ActorQueryParse_jsonld_ActorQueryParse_default_bus
});
const urn_comunica_default_query_parse_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:query-parse/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_parse__3_0_0_components_ActorQueryParse_jsonld_ActorQueryParse_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_rewrite_copy = new (require('@comunica/actor-optimize-query-operation-rewrite-copy').ActorOptimizeQueryOperationRewriteCopy)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#rewrite-copy',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_rewrite_move = new (require('@comunica/actor-optimize-query-operation-rewrite-move').ActorOptimizeQueryOperationRewriteMove)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#rewrite-move',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_rewrite_add = new (require('@comunica/actor-optimize-query-operation-rewrite-add').ActorOptimizeQueryOperationRewriteAdd)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#rewrite-add',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_group_sources = new (require('@comunica/actor-optimize-query-operation-group-sources').ActorOptimizeQueryOperationGroupSources)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#group-sources',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus
});
const urn_comunica_default_optimize_query_operation_mediators_main = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'filterErrors': true,
  'name': 'urn:comunica:default:optimize-query-operation/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus
});
const urn_comunica_default_query_result_serialize_actors_json = new (require('@comunica/actor-query-result-serialize-json').ActorQueryResultSerializeJson)({
  'mediaTypePriorities': {"application/json":1},
  'mediaTypeFormats': {"application/json":"https://comunica.linkeddatafragments.org/#results_JSON"},
  'name': 'urn:comunica:default:query-result-serialize/actors#json',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_simple = new (require('@comunica/actor-query-result-serialize-simple').ActorQueryResultSerializeSimple)({
  'mediaTypePriorities': {"simple":0.9},
  'mediaTypeFormats': {"simple":"https://comunica.linkeddatafragments.org/#results_simple"},
  'name': 'urn:comunica:default:query-result-serialize/actors#simple',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_csv = new (require('@comunica/actor-query-result-serialize-sparql-csv').ActorQueryResultSerializeSparqlCsv)({
  'mediaTypePriorities': {"text/csv":0.75},
  'mediaTypeFormats': {"text/csv":"http://www.w3.org/ns/formats/SPARQL_Results_CSV"},
  'name': 'urn:comunica:default:query-result-serialize/actors#csv',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_sparql_tsv = new (require('@comunica/actor-query-result-serialize-sparql-tsv').ActorQueryResultSerializeSparqlTsv)({
  'mediaTypePriorities': {"text/tab-separated-values":0.75},
  'mediaTypeFormats': {"text/tab-separated-values":"http://www.w3.org/ns/formats/SPARQL_Results_TSV"},
  'name': 'urn:comunica:default:query-result-serialize/actors#sparql-tsv',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_sparql_xml = new (require('@comunica/actor-query-result-serialize-sparql-xml').ActorQueryResultSerializeSparqlXml)({
  'mediaTypePriorities': {"application/sparql-results+xml":0.8},
  'mediaTypeFormats': {"application/sparql-results+xml":"http://www.w3.org/ns/formats/SPARQL_Results_XML"},
  'name': 'urn:comunica:default:query-result-serialize/actors#sparql-xml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_table = new (require('@comunica/actor-query-result-serialize-table').ActorQueryResultSerializeTable)({
  'columnWidth': 50,
  'mediaTypePriorities': {"table":0.6},
  'mediaTypeFormats': {"table":"https://comunica.linkeddatafragments.org/#results_table"},
  'name': 'urn:comunica:default:query-result-serialize/actors#table',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_tree = new (require('@comunica/actor-query-result-serialize-tree').ActorQueryResultSerializeTree)({
  'mediaTypePriorities': {"tree":0.5},
  'mediaTypeFormats': {"tree":"https://comunica.linkeddatafragments.org/#results_tree"},
  'name': 'urn:comunica:default:query-result-serialize/actors#tree',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_mediators_serialize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:query-result-serialize/mediators#serialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_mediators_mediaType = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'urn:comunica:default:query-result-serialize/mediators#mediaType',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_mediators_mediaTypeFormat = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': 'urn:comunica:default:query-result-serialize/mediators#mediaTypeFormat',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_dereference_actors_fallback = new (require('@comunica/actor-dereference-fallback').ActorDereferenceFallback)({
  'name': 'urn:comunica:default:dereference/actors#fallback',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference__3_0_0_components_ActorDereference_jsonld_ActorDereference_default_bus
});
const urn_comunica_default_dereference_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:dereference/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference__3_0_0_components_ActorDereference_jsonld_ActorDereference_default_bus
});
const urn_comunica_default_query_source_identify_hypermedia_mediators_main = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'filterFactor',
  'type': 'max',
  'ignoreErrors': true,
  'name': 'urn:comunica:default:query-source-identify-hypermedia/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify_hypermedia__3_0_0_components_ActorQuerySourceIdentifyHypermedia_jsonld_ActorQuerySourceIdentifyHypermedia_default_bus
});
const urn_comunica_default_dereference_rdf_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:dereference-rdf/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference_rdf__3_0_0_components_ActorDereferenceRdf_jsonld_ActorDereferenceRdf_default_bus
});
const urn_comunica_default_rdf_join_entries_sort_actors_cardinality = new (require('@comunica/actor-rdf-join-entries-sort-cardinality').ActorRdfJoinEntriesSortCardinality)({
  'name': 'urn:comunica:default:rdf-join-entries-sort/actors#cardinality',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_entries_sort__3_0_0_components_ActorRdfJoinEntriesSort_jsonld_ActorRdfJoinEntriesSort_default_bus
});
const urn_comunica_default_rdf_join_entries_sort_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-join-entries-sort/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_entries_sort__3_0_0_components_ActorRdfJoinEntriesSort_jsonld_ActorRdfJoinEntriesSort_default_bus
});
const urn_comunica_default_rdf_metadata_actors_primary_topic = new (require('@comunica/actor-rdf-metadata-primary-topic').ActorRdfMetadataPrimaryTopic)({
  'metadataToData': false,
  'dataToMetadataOnInvalidMetadataGraph': true,
  'name': 'urn:comunica:default:rdf-metadata/actors#primary-topic',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata__3_0_0_components_ActorRdfMetadata_jsonld_ActorRdfMetadata_default_bus
});
const urn_comunica_default_rdf_metadata_actors_all = new (require('@comunica/actor-rdf-metadata-all').ActorRdfMetadataAll)({
  'name': 'urn:comunica:default:rdf-metadata/actors#all',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata__3_0_0_components_ActorRdfMetadata_jsonld_ActorRdfMetadata_default_bus
});
const urn_comunica_default_rdf_metadata_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-metadata/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata__3_0_0_components_ActorRdfMetadata_jsonld_ActorRdfMetadata_default_bus
});
const urn_comunica_default_rdf_join_selectivity_actors_variable_counting = new (require('@comunica/actor-rdf-join-selectivity-variable-counting').ActorRdfJoinSelectivityVariableCounting)({
  'name': 'urn:comunica:default:rdf-join-selectivity/actors#variable-counting',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_selectivity__3_0_0_components_ActorRdfJoinSelectivity_jsonld_ActorRdfJoinSelectivity_default_bus
});
const urn_comunica_default_rdf_join_selectivity_mediators_main = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'accuracy',
  'type': 'max',
  'ignoreErrors': true,
  'name': 'urn:comunica:default:rdf-join-selectivity/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_selectivity__3_0_0_components_ActorRdfJoinSelectivity_jsonld_ActorRdfJoinSelectivity_default_bus
});
const urn_comunica_default_rdf_metadata_accumulate_actors_cancontainundefs = new (require('@comunica/actor-rdf-metadata-accumulate-cancontainundefs').ActorRdfMetadataAccumulateCanContainUndefs)({
  'name': 'urn:comunica:default:rdf-metadata-accumulate/actors#cancontainundefs',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus
});
const urn_comunica_default_rdf_metadata_accumulate_actors_cardinality = new (require('@comunica/actor-rdf-metadata-accumulate-cardinality').ActorRdfMetadataAccumulateCardinality)({
  'name': 'urn:comunica:default:rdf-metadata-accumulate/actors#cardinality',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus
});
const urn_comunica_default_rdf_metadata_accumulate_actors_pagesize = new (require('@comunica/actor-rdf-metadata-accumulate-pagesize').ActorRdfMetadataAccumulatePageSize)({
  'name': 'urn:comunica:default:rdf-metadata-accumulate/actors#pagesize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus
});
const urn_comunica_default_rdf_metadata_accumulate_actors_requesttime = new (require('@comunica/actor-rdf-metadata-accumulate-requesttime').ActorRdfMetadataAccumulateRequestTime)({
  'name': 'urn:comunica:default:rdf-metadata-accumulate/actors#requesttime',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus
});
const urn_comunica_default_rdf_metadata_accumulate_mediators_main = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'metadata',
  'name': 'urn:comunica:default:rdf-metadata-accumulate/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_accumulate__3_0_0_components_ActorRdfMetadataAccumulate_jsonld_ActorRdfMetadataAccumulate_default_bus
});
const urn_comunica_default_rdf_parse_html_actors_microdata = new (require('@comunica/actor-rdf-parse-html-microdata').ActorRdfParseHtmlMicrodata)({
  'name': 'urn:comunica:default:rdf-parse-html/actors#microdata',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html__3_0_0_components_ActorRdfParseHtml_jsonld_ActorRdfParseHtml_default_bus
});
const urn_comunica_default_rdf_parse_html_actors_rdfa = new (require('@comunica/actor-rdf-parse-html-rdfa').ActorRdfParseHtmlRdfa)({
  'name': 'urn:comunica:default:rdf-parse-html/actors#rdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html__3_0_0_components_ActorRdfParseHtml_jsonld_ActorRdfParseHtml_default_bus
});
const urn_comunica_default_rdf_parse_actors_n3 = new (require('@comunica/actor-rdf-parse-n3').ActorRdfParseN3)({
  'mediaTypePriorities': {"application/n-quads":1,"application/n-triples":0.8,"application/trig":0.95,"text/n3":0.35,"text/turtle":0.6},
  'mediaTypeFormats': {"application/n-quads":"http://www.w3.org/ns/formats/N-Quads","application/n-triples":"http://www.w3.org/ns/formats/N-Triples","application/trig":"http://www.w3.org/ns/formats/TriG","text/n3":"http://www.w3.org/ns/formats/N3","text/turtle":"http://www.w3.org/ns/formats/Turtle"},
  'priorityScale': 1,
  'name': 'urn:comunica:default:rdf-parse/actors#n3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_actors_rdfxml = new (require('@comunica/actor-rdf-parse-rdfxml').ActorRdfParseRdfXml)({
  'mediaTypePriorities': {"application/rdf+xml":1},
  'mediaTypeFormats': {"application/rdf+xml":"http://www.w3.org/ns/formats/RDF_XML"},
  'priorityScale': 0.5,
  'name': 'urn:comunica:default:rdf-parse/actors#rdfxml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_actors_xmlrdfa = new (require('@comunica/actor-rdf-parse-xml-rdfa').ActorRdfParseXmlRdfa)({
  'mediaTypePriorities': {"application/xml":1,"image/svg+xml":1,"text/xml":1},
  'mediaTypeFormats': {"application/xml":"http://www.w3.org/ns/formats/RDFa","image/svg+xml":"http://www.w3.org/ns/formats/RDFa","text/xml":"http://www.w3.org/ns/formats/RDFa"},
  'priorityScale': 0.3,
  'name': 'urn:comunica:default:rdf-parse/actors#xmlrdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_actors_html = new (require('@comunica/actor-rdf-parse-html').ActorRdfParseHtml)({
  'busRdfParseHtml': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html__3_0_0_components_ActorRdfParseHtml_jsonld_ActorRdfParseHtml_default_bus,
  'mediaTypePriorities': {"application/xhtml+xml":0.9,"text/html":1},
  'mediaTypeFormats': {"application/xhtml+xml":"http://www.w3.org/ns/formats/HTML","text/html":"http://www.w3.org/ns/formats/HTML"},
  'priorityScale': 0.2,
  'name': 'urn:comunica:default:rdf-parse/actors#html',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_actors_shaclc = new (require('@comunica/actor-rdf-parse-shaclc').ActorRdfParseShaclc)({
  'mediaTypePriorities': {"text/shaclc":1,"text/shaclc-ext":0.5},
  'mediaTypeFormats': {"text/shaclc":"http://www.w3.org/ns/formats/Shaclc","text/shaclc-ext":"http://www.w3.org/ns/formats/ShaclcExtended"},
  'priorityScale': 0.1,
  'name': 'urn:comunica:default:rdf-parse/actors#shaclc',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_mediators_parse = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-parse/mediators#parse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_parse_mediators_mediaType = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'urn:comunica:default:rdf-parse/mediators#mediaType',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_resolve_hypermedia_links_actors_next = new (require('@comunica/actor-rdf-resolve-hypermedia-links-next').ActorRdfResolveHypermediaLinksNext)({
  'name': 'urn:comunica:default:rdf-resolve-hypermedia-links/actors#next',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links__3_0_0_components_ActorRdfResolveHypermediaLinks_jsonld_ActorRdfResolveHypermediaLinks_default_bus
});
const urn_comunica_default_rdf_resolve_hypermedia_links_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-resolve-hypermedia-links/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links__3_0_0_components_ActorRdfResolveHypermediaLinks_jsonld_ActorRdfResolveHypermediaLinks_default_bus
});
const urn_comunica_default_rdf_resolve_hypermedia_links_queue_actors_fifo = new (require('@comunica/actor-rdf-resolve-hypermedia-links-queue-fifo').ActorRdfResolveHypermediaLinksQueueFifo)({
  'name': 'urn:comunica:default:rdf-resolve-hypermedia-links-queue/actors#fifo',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_queue__3_0_0_components_ActorRdfResolveHypermediaLinksQueue_jsonld_ActorRdfResolveHypermediaLinksQueue_default_bus
});
const urn_comunica_default_rdf_resolve_hypermedia_links_queue_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-resolve-hypermedia-links-queue/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_queue__3_0_0_components_ActorRdfResolveHypermediaLinksQueue_jsonld_ActorRdfResolveHypermediaLinksQueue_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_hydra_controls = new (require('@comunica/actor-rdf-metadata-extract-hydra-controls').ActorRdfMetadataExtractHydraControls)({
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#hydra-controls',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_hydra_count = new (require('@comunica/actor-rdf-metadata-extract-hydra-count').ActorRdfMetadataExtractHydraCount)({
  'predicates': [
  'http://www.w3.org/ns/hydra/core#totalItems',
  'http://rdfs.org/ns/void#triples'
],
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#hydra-count',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_hydra_pagesize = new (require('@comunica/actor-rdf-metadata-extract-hydra-pagesize').ActorRdfMetadataExtractHydraPagesize)({
  'predicates': [
  'http://www.w3.org/ns/hydra/core#itemsPerPage'
],
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#hydra-pagesize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_request_time = new (require('@comunica/actor-rdf-metadata-extract-request-time').ActorRdfMetadataExtractRequestTime)({
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#request-time',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_allow_http_methods = new (require('@comunica/actor-rdf-metadata-extract-allow-http-methods').ActorRdfMetadataExtractAllowHttpMethods)({
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#allow-http-methods',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_put_accepted = new (require('@comunica/actor-rdf-metadata-extract-put-accepted').ActorRdfMetadataExtractPutAccepted)({
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#put-accepted',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_patch_sparql_update = new (require('@comunica/actor-rdf-metadata-extract-patch-sparql-update').ActorRdfMetadataExtractPatchSparqlUpdate)({
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#patch-sparql-update',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_actors_sparql_service = new (require('@comunica/actor-rdf-metadata-extract-sparql-service').ActorRdfMetadataExtractSparqlService)({
  'inferHttpsEndpoint': true,
  'name': 'urn:comunica:default:rdf-metadata-extract/actors#sparql-service',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_metadata_extract_mediators_main = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'filterErrors': true,
  'field': 'metadata',
  'name': 'urn:comunica:default:rdf-metadata-extract/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract__3_0_0_components_ActorRdfMetadataExtract_jsonld_ActorRdfMetadataExtract_default_bus
});
const urn_comunica_default_rdf_serialize_actors_n3 = new (require('@comunica/actor-rdf-serialize-n3').ActorRdfSerializeN3)({
  'mediaTypePriorities': {"application/n-quads":1,"application/n-triples":0.8,"application/trig":0.95,"text/n3":0.35,"text/turtle":0.6},
  'mediaTypeFormats': {"application/n-quads":"http://www.w3.org/ns/formats/N-Quads","application/n-triples":"http://www.w3.org/ns/formats/N-Triples","application/trig":"http://www.w3.org/ns/formats/TriG","text/n3":"http://www.w3.org/ns/formats/N3","text/turtle":"http://www.w3.org/ns/formats/Turtle"},
  'name': 'urn:comunica:default:rdf-serialize/actors#n3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_serialize_actors_jsonld = new (require('@comunica/actor-rdf-serialize-jsonld').ActorRdfSerializeJsonLd)({
  'jsonStringifyIndentSpaces': 2,
  'mediaTypePriorities': {"application/ld+json":1},
  'mediaTypeFormats': {"application/ld+json":"http://www.w3.org/ns/formats/JSON-LD"},
  'priorityScale': 0.9,
  'name': 'urn:comunica:default:rdf-serialize/actors#jsonld',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_serialize_actors_shaclc = new (require('@comunica/actor-rdf-serialize-shaclc').ActorRdfSerializeShaclc)({
  'mediaTypePriorities': {"text/shaclc":1,"text/shaclc-ext":0.5},
  'mediaTypeFormats': {"text/shaclc":"http://www.w3.org/ns/formats/Shaclc","text/shaclc-ext":"http://www.w3.org/ns/formats/ShaclcExtended"},
  'priorityScale': 0.1,
  'name': 'urn:comunica:default:rdf-serialize/actors#shaclc',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_serialize_mediators_serialize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-serialize/mediators#serialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_serialize_mediators_mediaType = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'urn:comunica:default:rdf-serialize/mediators#mediaType',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_serialize_mediators_mediaTypeFormat = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': 'urn:comunica:default:rdf-serialize/mediators#mediaTypeFormat',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize__3_0_0_components_ActorRdfSerialize_jsonld_ActorRdfSerialize_default_bus
});
const urn_comunica_default_rdf_update_hypermedia_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-update-hypermedia/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_hypermedia__3_0_0_components_ActorRdfUpdateHypermedia_jsonld_ActorRdfUpdateHypermedia_default_bus
});
const urn_comunica_default_rdf_update_quads_actors_rdfjs_store = new (require('@comunica/actor-rdf-update-quads-rdfjs-store').ActorRdfUpdateQuadsRdfJsStore)({
  'name': 'urn:comunica:default:rdf-update-quads/actors#rdfjs-store',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_quads__3_0_0_components_ActorRdfUpdateQuads_jsonld_ActorRdfUpdateQuads_default_bus
});
const urn_comunica_default_rdf_update_quads_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:rdf-update-quads/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_quads__3_0_0_components_ActorRdfUpdateQuads_jsonld_ActorRdfUpdateQuads_default_bus
});
const urn_comunica_default_query_operation_actors_source = new (require('@comunica/actor-query-operation-source').ActorQueryOperationSource)({
  'name': 'urn:comunica:default:query-operation/actors#source',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_mediators_main = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'httpRequests',
  'type': 'min',
  'ignoreErrors': true,
  'name': 'urn:comunica:default:query-operation/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_process_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:query-process/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus
});
const urn_comunica_default_http_actors_fetch = new (require('@comunica/actor-http-fetch').ActorHttpFetch)({
  'agentOptions': {"keepAlive":true,"maxSockets":5},
  'name': 'urn:comunica:default:http/actors#fetch',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus
});
const urn_comunica_default_http_mediators_no_fallback = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'time',
  'type': 'min',
  'ignoreErrors': true,
  'name': 'urn:comunica:default:http/mediators#no-fallback',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus
});
const urn_comunica_default_http_mediators_main = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'time',
  'type': 'min',
  'ignoreErrors': true,
  'name': 'urn:comunica:default:http/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_fallback_bus
});
const urn_comunica_default_query_source_identify_mediators_main = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'urn:comunica:default:query-source-identify/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify__3_0_0_components_ActorQuerySourceIdentify_jsonld_ActorQuerySourceIdentify_default_bus
});
const urn_comunica_default_rdf_join_mediators_main = new (require('@comunica/mediator-join-coefficients-fixed').MediatorJoinCoefficientsFixed)({
  'cpuWeight': 10,
  'memoryWeight': 1,
  'timeWeight': 2,
  'ioWeight': 100,
  'name': 'urn:comunica:default:rdf-join/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_context_preprocess_query_source_identify__3_0_0_components_ActorContextPreprocessQuerySourceIdentify_jsonld_IActorContextPreprocessQuerySourceIdentifyArgs_default_invalidator = new (require('@comunica/bus-http-invalidate').ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-context-preprocess-query-source-identify/^3.0.0/components/ActorContextPreprocessQuerySourceIdentify.jsonld#IActorContextPreprocessQuerySourceIdentifyArgs_default_invalidator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus
});
const urn_comunica_default_http_invalidate_mediators_main = new (require('@comunica/mediator-all').MediatorAll)({
  'name': 'urn:comunica:default:http-invalidate/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_rdf_update_quads_hypermedia__3_0_0_components_ActorRdfUpdateQuadsHypermedia_jsonld_IActorRdfUpdateQuadsHypermediaArgs_default_invalidator = new (require('@comunica/bus-http-invalidate').ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-rdf-update-quads-hypermedia/^3.0.0/components/ActorRdfUpdateQuadsHypermedia.jsonld#IActorRdfUpdateQuadsHypermediaArgs_default_invalidator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_sparql_json__3_0_0_components_ActionObserverHttp_jsonld_IActionObserverHttpArgs_default_invalidator = new (require('@comunica/bus-http-invalidate').ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-query-result-serialize-sparql-json/^3.0.0/components/ActionObserverHttp.jsonld#IActionObserverHttpArgs_default_invalidator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_stats__3_0_0_components_ActionObserverHttp_jsonld_IActionObserverHttpArgs_default_invalidator = new (require('@comunica/bus-http-invalidate').ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-query-result-serialize-stats/^3.0.0/components/ActionObserverHttp.jsonld#IActionObserverHttpArgs_default_invalidator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate__3_0_0_components_ActorHttpInvalidate_jsonld_ActorHttpInvalidate_default_bus
});
const urn_comunica_default_merge_bindings_context_mediators_main = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mergeHandlers',
  'name': 'urn:comunica:default:merge-bindings-context/mediators#main',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_merge_bindings_context__3_0_0_components_ActorMergeBindingsContext_jsonld_ActorMergeBindingsContext_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_single = new (require('@comunica/actor-rdf-join-inner-single').ActorRdfJoinSingle)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-single',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_multi_empty = new (require('@comunica/actor-rdf-join-inner-multi-empty').ActorRdfJoinMultiEmpty)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-multi-empty',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_multi_bind_source = new (require('@comunica/actor-rdf-join-inner-multi-bind-source').ActorRdfJoinMultiBindSource)({
  'selectivityModifier': 0.0001,
  'blockSize': 16,
  'mediatorJoinEntriesSort': urn_comunica_default_rdf_join_entries_sort_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-multi-bind-source',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_hash = new (require('@comunica/actor-rdf-join-inner-hash').ActorRdfJoinHash)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-hash',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_symmetric_hash = new (require('@comunica/actor-rdf-join-inner-symmetrichash').ActorRdfJoinSymmetricHash)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-symmetric-hash',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_nested_loop = new (require('@comunica/actor-rdf-join-inner-nestedloop').ActorRdfJoinNestedLoop)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-nested-loop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_minus_hash = new (require('@comunica/actor-rdf-join-minus-hash').ActorRdfJoinMinusHash)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#minus-hash',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_minus_hash_undef = new (require('@comunica/actor-rdf-join-minus-hash-undef').ActorRdfJoinMinusHashUndef)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#minus-hash-undef',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_optional_nested_loop = new (require('@comunica/actor-rdf-join-optional-nestedloop').ActorRdfJoinOptionalNestedLoop)({
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#optional-nested-loop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_dereference_rdf_actors_parse = new (require('@comunica/actor-dereference-rdf-parse').ActorDereferenceRdfParse)({
  'mediatorDereference': urn_comunica_default_dereference_mediators_main,
  'mediatorParse': urn_comunica_default_rdf_parse_mediators_parse,
  'mediatorParseMediatypes': urn_comunica_default_rdf_parse_mediators_mediaType,
  'mediaMappings': {"htm":"text/html","html":"text/html","json":"application/json","jsonld":"application/ld+json","n3":"text/n3","nq":"application/n-quads","nquads":"application/n-quads","nt":"application/n-triples","ntriples":"application/n-triples","owl":"application/rdf+xml","rdf":"application/rdf+xml","rdfxml":"application/rdf+xml","shaclc":"text/shaclc","shaclce":"text/shaclc-ext","shc":"text/shaclc","shce":"text/shaclc-ext","svg":"image/svg+xml","svgz":"image/svg+xml","trig":"application/trig","ttl":"text/turtle","turtle":"text/turtle","xht":"application/xhtml+xml","xhtml":"application/xhtml+xml","xml":"application/xml"},
  'name': 'urn:comunica:default:dereference-rdf/actors#parse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference_rdf__3_0_0_components_ActorDereferenceRdf_jsonld_ActorDereferenceRdf_default_bus
});
const urn_comunica_default_rdf_parse_html_actors_script = new (require('@comunica/actor-rdf-parse-html-script').ActorRdfParseHtmlScript)({
  'mediatorRdfParseMediatypes': urn_comunica_default_rdf_parse_mediators_mediaType,
  'mediatorRdfParseHandle': urn_comunica_default_rdf_parse_mediators_parse,
  'name': 'urn:comunica:default:rdf-parse-html/actors#script',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html__3_0_0_components_ActorRdfParseHtml_jsonld_ActorRdfParseHtml_default_bus
});
const urn_comunica_default_query_result_serialize_actors_rdf = new (require('@comunica/actor-query-result-serialize-rdf').ActorQueryResultSerializeRdf)({
  'mediatorRdfSerialize': urn_comunica_default_rdf_serialize_mediators_serialize,
  'mediatorMediaTypeCombiner': urn_comunica_default_rdf_serialize_mediators_mediaType,
  'mediatorMediaTypeFormatCombiner': urn_comunica_default_rdf_serialize_mediators_mediaTypeFormat,
  'name': 'urn:comunica:default:query-result-serialize/actors#rdf',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_operation_actors_bgp = new (require('@comunica/actor-query-operation-bgp-join').ActorQueryOperationBgpJoin)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#bgp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_ask = new (require('@comunica/actor-query-operation-ask').ActorQueryOperationAsk)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#ask',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_construct = new (require('@comunica/actor-query-operation-construct').ActorQueryOperationConstruct)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#construct',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_distinct = new (require('@comunica/actor-query-operation-distinct-hash').ActorQueryOperationDistinctHash)({
  'mediatorHashBindings': urn_comunica_default_hash_bindings_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#distinct',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_from = new (require('@comunica/actor-query-operation-from-quad').ActorQueryOperationFromQuad)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#from',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_project = new (require('@comunica/actor-query-operation-project').ActorQueryOperationProject)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#project',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_reduced = new (require('@comunica/actor-query-operation-reduced-hash').ActorQueryOperationReducedHash)({
  'mediatorHashBindings': urn_comunica_default_hash_bindings_mediators_main,
  'cacheSize': 100,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#reduced',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_nps = new (require('@comunica/actor-query-operation-path-nps').ActorQueryOperationPathNps)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-nps',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_link = new (require('@comunica/actor-query-operation-path-link').ActorQueryOperationPathLink)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-link',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_alt = new (require('@comunica/actor-query-operation-path-alt').ActorQueryOperationPathAlt)({
  'mediatorRdfMetadataAccumulate': urn_comunica_default_rdf_metadata_accumulate_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-alt',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_slice = new (require('@comunica/actor-query-operation-slice').ActorQueryOperationSlice)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#slice',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_inv = new (require('@comunica/actor-query-operation-path-inv').ActorQueryOperationPathInv)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-inv',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_union = new (require('@comunica/actor-query-operation-union').ActorQueryOperationUnion)({
  'mediatorRdfMetadataAccumulate': urn_comunica_default_rdf_metadata_accumulate_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#union',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_update_clear = new (require('@comunica/actor-query-operation-update-clear').ActorQueryOperationClear)({
  'mediatorUpdateQuads': urn_comunica_default_rdf_update_quads_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-clear',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_update_create = new (require('@comunica/actor-query-operation-update-create').ActorQueryOperationCreate)({
  'mediatorUpdateQuads': urn_comunica_default_rdf_update_quads_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-create',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_update_drop = new (require('@comunica/actor-query-operation-update-drop').ActorQueryOperationDrop)({
  'mediatorUpdateQuads': urn_comunica_default_rdf_update_quads_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-drop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_update_composite = new (require('@comunica/actor-query-operation-update-compositeupdate').ActorQueryOperationUpdateCompositeUpdate)({
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-composite',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_http_actors_wayback = new (require('@comunica/actor-http-wayback').ActorHttpWayback)({
  'mediatorHttp': urn_comunica_default_http_mediators_no_fallback,
  'name': 'urn:comunica:default:http/actors#wayback',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_fallback_bus
});
const urn_comunica_default_rdf_parse_actors_jsonld = new (require('@comunica/actor-rdf-parse-jsonld').ActorRdfParseJsonLd)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'mediaTypePriorities': {"application/json":0.15,"application/ld+json":1},
  'mediaTypeFormats': {"application/json":"http://www.w3.org/ns/formats/JSON-LD","application/ld+json":"http://www.w3.org/ns/formats/JSON-LD"},
  'priorityScale': 0.9,
  'name': 'urn:comunica:default:rdf-parse/actors#jsonld',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse__3_0_0_components_ActorRdfParse_jsonld_ActorRdfParse_default_bus
});
const urn_comunica_default_rdf_update_hypermedia_actors_patch_sparql_update = new (require('@comunica/actor-rdf-update-hypermedia-patch-sparql-update').ActorRdfUpdateHypermediaPatchSparqlUpdate)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'name': 'urn:comunica:default:rdf-update-hypermedia/actors#patch-sparql-update',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_hypermedia__3_0_0_components_ActorRdfUpdateHypermedia_jsonld_ActorRdfUpdateHypermedia_default_bus
});
const urn_comunica_default_rdf_update_hypermedia_actors_put_ldp = new (require('@comunica/actor-rdf-update-hypermedia-put-ldp').ActorRdfUpdateHypermediaPutLdp)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'mediatorRdfSerializeMediatypes': urn_comunica_default_rdf_serialize_mediators_mediaType,
  'mediatorRdfSerialize': urn_comunica_default_rdf_serialize_mediators_serialize,
  'name': 'urn:comunica:default:rdf-update-hypermedia/actors#put-ldp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_hypermedia__3_0_0_components_ActorRdfUpdateHypermedia_jsonld_ActorRdfUpdateHypermedia_default_bus
});
const urn_comunica_default_rdf_update_hypermedia_actors_sparql = new (require('@comunica/actor-rdf-update-hypermedia-sparql').ActorRdfUpdateHypermediaSparql)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'checkUrlSuffixSparql': true,
  'checkUrlSuffixUpdate': true,
  'name': 'urn:comunica:default:rdf-update-hypermedia/actors#sparql',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_hypermedia__3_0_0_components_ActorRdfUpdateHypermedia_jsonld_ActorRdfUpdateHypermedia_default_bus
});
const urn_comunica_default_query_operation_actors_update_load = new (require('@comunica/actor-query-operation-update-load').ActorQueryOperationLoad)({
  'mediatorUpdateQuads': urn_comunica_default_rdf_update_quads_mediators_main,
  'mediatorQuerySourceIdentify': urn_comunica_default_query_source_identify_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-load',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_minus = new (require('@comunica/actor-query-operation-minus').ActorQueryOperationMinus)({
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#minus',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_join = new (require('@comunica/actor-query-operation-join').ActorQueryOperationJoin)({
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#join',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_seq = new (require('@comunica/actor-query-operation-path-seq').ActorQueryOperationPathSeq)({
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-seq',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_multi_smallest = new (require('@comunica/actor-rdf-join-inner-multi-smallest').ActorRdfJoinMultiSmallest)({
  'mediatorJoinEntriesSort': urn_comunica_default_rdf_join_entries_sort_mediators_main,
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-multi-smallest',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_multi_smallest_filter_bindings = new (require('@comunica/actor-rdf-join-inner-multi-smallest-filter-bindings').ActorRdfJoinMultiSmallestFilterBindings)({
  'selectivityModifier': 0.0001,
  'blockSize': 64,
  'mediatorJoinEntriesSort': urn_comunica_default_rdf_join_entries_sort_mediators_main,
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-multi-smallest-filter-bindings',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_filter_pushdown = new (require('@comunica/actor-optimize-query-operation-filter-pushdown').ActorOptimizeQueryOperationFilterPushdown)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#filter-pushdown',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_group_sources
]
});
const urn_comunica_default_dereference_actors_http = new (require('@comunica/actor-dereference-http').ActorDereferenceHttp)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'maxAcceptHeaderLength': 1024,
  'maxAcceptHeaderLengthBrowser': 128,
  'name': 'urn:comunica:default:dereference/actors#http',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_dereference__3_0_0_components_ActorDereference_jsonld_ActorDereference_default_bus,
  'beforeActors': [
  urn_comunica_default_dereference_actors_fallback
]
});
const urn_comunica_default_http_actors_proxy = new (require('@comunica/actor-http-proxy').ActorHttpProxy)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'name': 'urn:comunica:default:http/actors#proxy',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus,
  'beforeActors': [
  urn_comunica_default_http_actors_fetch
]
});
const urn_comunica_default_context_preprocess_actors_query_source_identify = new (require('@comunica/actor-context-preprocess-query-source-identify').ActorContextPreprocessQuerySourceIdentify)({
  'cacheSize': 100,
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_context_preprocess_query_source_identify__3_0_0_components_ActorContextPreprocessQuerySourceIdentify_jsonld_IActorContextPreprocessQuerySourceIdentifyArgs_default_invalidator,
  'mediatorQuerySourceIdentify': urn_comunica_default_query_source_identify_mediators_main,
  'mediatorContextPreprocess': urn_comunica_default_context_preprocess_mediators_main,
  'name': 'urn:comunica:default:context-preprocess/actors#query-source-identify',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess__3_0_0_components_ActorContextPreprocess_jsonld_ActorContextPreprocess_default_bus,
  'beforeActors': [
  urn_comunica_default_context_preprocess_actors_query_source_skolemize
]
});
const urn_comunica_default_init_actors_query = new (require('@comunica/actor-init-query').ActorInitQuery)({
  'mediatorQueryProcess': urn_comunica_default_query_process_mediators_main,
  'mediatorQueryResultSerialize': urn_comunica_default_query_result_serialize_mediators_serialize,
  'mediatorQueryResultSerializeMediaTypeCombiner': urn_comunica_default_query_result_serialize_mediators_mediaType,
  'mediatorQueryResultSerializeMediaTypeFormatCombiner': urn_comunica_default_query_result_serialize_mediators_mediaTypeFormat,
  'mediatorHttpInvalidate': urn_comunica_default_http_invalidate_mediators_main,
  'defaultQueryInputFormat': 'sparql',
  'allowNoSources': false,
  'name': 'urn:comunica:default:init/actors#query',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init__3_0_0_components_ActorInit_jsonld_ActorInit_default_bus
});
const urn_comunica_default_rdf_update_quads_actors_hypermedia = new (require('@comunica/actor-rdf-update-quads-hypermedia').ActorRdfUpdateQuadsHypermedia)({
  'cacheSize': 100,
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_rdf_update_quads_hypermedia__3_0_0_components_ActorRdfUpdateQuadsHypermedia_jsonld_IActorRdfUpdateQuadsHypermediaArgs_default_invalidator,
  'mediatorDereferenceRdf': urn_comunica_default_dereference_rdf_mediators_main,
  'mediatorMetadata': urn_comunica_default_rdf_metadata_mediators_main,
  'mediatorMetadataExtract': urn_comunica_default_rdf_metadata_extract_mediators_main,
  'mediatorRdfUpdateHypermedia': urn_comunica_default_rdf_update_hypermedia_mediators_main,
  'name': 'urn:comunica:default:rdf-update-quads/actors#hypermedia',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_update_quads__3_0_0_components_ActorRdfUpdateQuads_jsonld_ActorRdfUpdateQuads_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_sparql_json__3_0_0_components_ActorQueryResultSerializeSparqlJson_jsonld_ActorQueryResultSerializeSparqlJson_default_observer = new (require('@comunica/actor-query-result-serialize-sparql-json').ActionObserverHttp)({
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_sparql_json__3_0_0_components_ActionObserverHttp_jsonld_IActionObserverHttpArgs_default_invalidator,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-query-result-serialize-sparql-json/^3.0.0/components/ActorQueryResultSerializeSparqlJson.jsonld#ActorQueryResultSerializeSparqlJson_default_observer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_stats__3_0_0_components_ActorQueryResultSerializeStats_jsonld_ActorQueryResultSerializeStats_default_observer = new (require('@comunica/actor-query-result-serialize-stats').ActionObserverHttp)({
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_stats__3_0_0_components_ActionObserverHttp_jsonld_IActionObserverHttpArgs_default_invalidator,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-query-result-serialize-stats/^3.0.0/components/ActorQueryResultSerializeStats.jsonld#ActorQueryResultSerializeStats_default_observer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http__3_0_0_components_ActorHttp_jsonld_ActorHttp_default_bus
});
const urn_comunica_default_query_source_identify_hypermedia_actors_qpf = new (require('@comunica/actor-query-source-identify-hypermedia-qpf').ActorQuerySourceIdentifyHypermediaQpf)({
  'mediatorMetadata': urn_comunica_default_rdf_metadata_mediators_main,
  'mediatorMetadataExtract': urn_comunica_default_rdf_metadata_extract_mediators_main,
  'mediatorDereferenceRdf': urn_comunica_default_dereference_rdf_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'subjectUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject',
  'predicateUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate',
  'objectUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object',
  'graphUri': 'http://www.w3.org/ns/sparql-service-description#graph',
  'name': 'urn:comunica:default:query-source-identify-hypermedia/actors#qpf',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify_hypermedia__3_0_0_components_ActorQuerySourceIdentifyHypermedia_jsonld_ActorQuerySourceIdentifyHypermedia_default_bus
});
const urn_comunica_default_rdf_resolve_quad_pattern_actors_sparql = new (require('@comunica/actor-query-source-identify-hypermedia-sparql').ActorQuerySourceIdentifyHypermediaSparql)({
  'mediatorHttp': urn_comunica_default_http_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'checkUrlSuffix': true,
  'forceHttpGet': false,
  'cacheSize': 1024,
  'bindMethod': 'values',
  'countTimeout': 3000,
  'name': 'urn:comunica:default:rdf-resolve-quad-pattern/actors#sparql',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify_hypermedia__3_0_0_components_ActorQuerySourceIdentifyHypermedia_jsonld_ActorQuerySourceIdentifyHypermedia_default_bus
});
const urn_comunica_default_query_source_identify_hypermedia_actors_none = new (require('@comunica/actor-query-source-identify-hypermedia-none').ActorQuerySourceIdentifyHypermediaNone)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'name': 'urn:comunica:default:query-source-identify-hypermedia/actors#none',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify_hypermedia__3_0_0_components_ActorQuerySourceIdentifyHypermedia_jsonld_ActorQuerySourceIdentifyHypermedia_default_bus
});
const urn_comunica_default_query_operation_actors_extend = new (require('@comunica/actor-query-operation-extend').ActorQueryOperationExtend)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#extend',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_filter = new (require('@comunica/actor-query-operation-filter').ActorQueryOperationFilter)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#filter',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_orderby = new (require('@comunica/actor-query-operation-orderby').ActorQueryOperationOrderBy)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#orderby',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_nop = new (require('@comunica/actor-query-operation-nop').ActorQueryOperationNop)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#nop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_values = new (require('@comunica/actor-query-operation-values').ActorQueryOperationValues)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#values',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_service = new (require('@comunica/actor-query-operation-service').ActorQueryOperationService)({
  'forceSparqlEndpoint': false,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQuerySourceIdentify': urn_comunica_default_query_source_identify_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#service',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_leftjoin = new (require('@comunica/actor-query-operation-leftjoin').ActorQueryOperationLeftJoin)({
  'mediatorJoin': urn_comunica_default_rdf_join_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#leftjoin',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_group = new (require('@comunica/actor-query-operation-group').ActorQueryOperationGroup)({
  'mediatorHashBindings': urn_comunica_default_hash_bindings_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#group',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_zero_or_one = new (require('@comunica/actor-query-operation-path-zero-or-one').ActorQueryOperationPathZeroOrOne)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-zero-or-one',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_zero_or_more = new (require('@comunica/actor-query-operation-path-zero-or-more').ActorQueryOperationPathZeroOrMore)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-zero-or-more',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_update_delete_insert = new (require('@comunica/actor-query-operation-update-deleteinsert').ActorQueryOperationUpdateDeleteInsert)({
  'mediatorUpdateQuads': urn_comunica_default_rdf_update_quads_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#update-delete-insert',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_operation_actors_path_one_or_more = new (require('@comunica/actor-query-operation-path-one-or-more').ActorQueryOperationPathOneOrMore)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'name': 'urn:comunica:default:query-operation/actors#path-one-or-more',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation__3_0_0_components_ActorQueryOperation_jsonld_ActorQueryOperation_default_bus
});
const urn_comunica_default_query_process_actors_sequential = new (require('@comunica/actor-query-process-sequential').ActorQueryProcessSequential)({
  'mediatorContextPreprocess': urn_comunica_default_context_preprocess_mediators_main,
  'mediatorQueryParse': urn_comunica_default_query_parse_mediators_main,
  'mediatorOptimizeQueryOperation': urn_comunica_default_optimize_query_operation_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'name': 'urn:comunica:default:query-process/actors#sequential',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus
});
const urn_comunica_default_query_source_identify_actors_hypermedia = new (require('@comunica/actor-query-source-identify-hypermedia').ActorQuerySourceIdentifyHypermedia)({
  'cacheSize': 100,
  'maxIterators': 64,
  'aggregateTraversalStore': true,
  'mediatorDereferenceRdf': urn_comunica_default_dereference_rdf_mediators_main,
  'mediatorMetadata': urn_comunica_default_rdf_metadata_mediators_main,
  'mediatorMetadataExtract': urn_comunica_default_rdf_metadata_extract_mediators_main,
  'mediatorMetadataAccumulate': urn_comunica_default_rdf_metadata_accumulate_mediators_main,
  'mediatorQuerySourceIdentifyHypermedia': urn_comunica_default_query_source_identify_hypermedia_mediators_main,
  'mediatorRdfResolveHypermediaLinks': urn_comunica_default_rdf_resolve_hypermedia_links_mediators_main,
  'mediatorRdfResolveHypermediaLinksQueue': urn_comunica_default_rdf_resolve_hypermedia_links_queue_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'name': 'urn:comunica:default:query-source-identify/actors#hypermedia',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify__3_0_0_components_ActorQuerySourceIdentify_jsonld_ActorQuerySourceIdentify_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_none = new (require('@comunica/actor-rdf-join-inner-none').ActorRdfJoinNone)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-none',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_inner_multi_bind = new (require('@comunica/actor-rdf-join-inner-multi-bind').ActorRdfJoinMultiBind)({
  'bindOrder': 'depth-first',
  'selectivityModifier': 0.0001,
  'mediatorJoinEntriesSort': urn_comunica_default_rdf_join_entries_sort_mediators_main,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#inner-multi-bind',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_rdf_join_actors_optional_bind = new (require('@comunica/actor-rdf-join-optional-bind').ActorRdfJoinOptionalBind)({
  'bindOrder': 'depth-first',
  'selectivityModifier': 0.0001,
  'mediatorQueryOperation': urn_comunica_default_query_operation_mediators_main,
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'mediatorJoinSelectivity': urn_comunica_default_rdf_join_selectivity_mediators_main,
  'name': 'urn:comunica:default:rdf-join/actors#optional-bind',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join__3_0_0_components_ActorRdfJoin_jsonld_ActorRdfJoin_default_bus
});
const urn_comunica_default_query_result_serialize_actors_sparql_json = new (require('@comunica/actor-query-result-serialize-sparql-json').ActorQueryResultSerializeSparqlJson)({
  'emitMetadata': true,
  'httpObserver': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_sparql_json__3_0_0_components_ActorQueryResultSerializeSparqlJson_jsonld_ActorQueryResultSerializeSparqlJson_default_observer,
  'mediaTypePriorities': {"application/sparql-results+json":0.8},
  'mediaTypeFormats': {"application/sparql-results+json":"http://www.w3.org/ns/formats/SPARQL_Results_JSON"},
  'name': 'urn:comunica:default:query-result-serialize/actors#sparql-json',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_result_serialize_actors_stats = new (require('@comunica/actor-query-result-serialize-stats').ActorQueryResultSerializeStats)({
  'httpObserver': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_query_result_serialize_stats__3_0_0_components_ActorQueryResultSerializeStats_jsonld_ActorQueryResultSerializeStats_default_observer,
  'mediaTypePriorities': {"stats":0.5},
  'mediaTypeFormats': {"stats":"https://comunica.linkeddatafragments.org/#results_stats"},
  'name': 'urn:comunica:default:query-result-serialize/actors#stats',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_result_serialize__3_0_0_components_ActorQueryResultSerialize_jsonld_ActorQueryResultSerialize_default_bus
});
const urn_comunica_default_query_process_actors_explain_parsed = new (require('@comunica/actor-query-process-explain-parsed').ActorQueryProcessExplainParsed)({
  'queryProcessor': urn_comunica_default_query_process_actors_sequential,
  'name': 'urn:comunica:default:query-process/actors#explain-parsed',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus
});
const urn_comunica_default_query_process_actors_explain_physical = new (require('@comunica/actor-query-process-explain-physical').ActorQueryProcessExplainPhysical)({
  'queryProcessor': urn_comunica_default_query_process_actors_sequential,
  'name': 'urn:comunica:default:query-process/actors#explain-physical',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus
});
const urn_comunica_default_query_process_actors_explain_logical = new (require('@comunica/actor-query-process-explain-logical').ActorQueryProcessExplainLogical)({
  'queryProcessor': urn_comunica_default_query_process_actors_sequential,
  'name': 'urn:comunica:default:query-process/actors#explain-logical',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_process__3_0_0_components_ActorQueryProcess_jsonld_ActorQueryProcess_default_bus
});
const urn_comunica_default_optimize_query_operation_actors_prune_empty_source_operations = new (require('@comunica/actor-optimize-query-operation-prune-empty-source-operations').ActorOptimizeQueryOperationPruneEmptySourceOperations)({
  'useAskIfSupported': false,
  'name': 'urn:comunica:default:optimize-query-operation/actors#prune-empty-source-operations',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_filter_pushdown
]
});
const urn_comunica_default_query_source_identify_actors_rdfjs = new (require('@comunica/actor-query-source-identify-rdfjs').ActorQuerySourceIdentifyRdfJs)({
  'mediatorMergeBindingsContext': urn_comunica_default_merge_bindings_context_mediators_main,
  'name': 'urn:comunica:default:query-source-identify/actors#rdfjs',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify__3_0_0_components_ActorQuerySourceIdentify_jsonld_ActorQuerySourceIdentify_default_bus,
  'beforeActors': [
  urn_comunica_default_query_source_identify_actors_hypermedia
]
});
const urn_comunica_default_query_source_identify_actors_serialized = new (require('@comunica/actor-query-source-identify-serialized').ActorQuerySourceIdentifySerialized)({
  'mediatorRdfParse': urn_comunica_default_rdf_parse_mediators_parse,
  'mediatorQuerySourceIdentify': urn_comunica_default_query_source_identify_mediators_main,
  'name': 'urn:comunica:default:query-source-identify/actors#serialized',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_source_identify__3_0_0_components_ActorQuerySourceIdentify_jsonld_ActorQuerySourceIdentify_default_bus,
  'beforeActors': [
  urn_comunica_default_query_source_identify_actors_hypermedia
]
});
const urn_comunica_default_optimize_query_operation_actors_join_connected = new (require('@comunica/actor-optimize-query-operation-join-connected').ActorOptimizeQueryOperationJoinConnected)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#join-connected',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_prune_empty_source_operations
]
});
const urn_comunica_default_optimize_query_operation_actors_bgp_to_join = new (require('@comunica/actor-optimize-query-operation-bgp-to-join').ActorOptimizeQueryOperationBgpToJoin)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#bgp-to-join',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_join_connected
]
});
const urn_comunica_default_optimize_query_operation_actors_join_bgp = new (require('@comunica/actor-optimize-query-operation-join-bgp').ActorOptimizeQueryOperationJoinBgp)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#join-bgp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_bgp_to_join
]
});
const urn_comunica_default_optimize_query_operation_actors_assign_sources_exhaustive = new (require('@comunica/actor-optimize-query-operation-assign-sources-exhaustive').ActorOptimizeQueryOperationAssignSourcesExhaustive)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#assign-sources-exhaustive',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_join_bgp
]
});
const urn_comunica_default_optimize_query_operation_actors_describe_to_constructs_subject = new (require('@comunica/actor-optimize-query-operation-describe-to-constructs-subject').ActorOptimizeQueryOperationDescribeToConstructsSubject)({
  'name': 'urn:comunica:default:optimize-query-operation/actors#describe-to-constructs-subject',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation__3_0_0_components_ActorOptimizeQueryOperation_jsonld_ActorOptimizeQueryOperation_default_bus,
  'beforeActors': [
  urn_comunica_default_optimize_query_operation_actors_assign_sources_exhaustive
]
});
const urn_comunica_default_Runner = (https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init__3_0_0_components_ActorInit_jsonld_ActorInit_default_bus, [
  urn_comunica_default_context_preprocess_actors_convert_shortcuts,
  urn_comunica_default_context_preprocess_actors_set_defaults,
  urn_comunica_default_context_preprocess_actors_source_to_destination,
  urn_comunica_default_context_preprocess_actors_query_source_identify,
  urn_comunica_default_context_preprocess_actors_query_source_skolemize,
  urn_comunica_default_hash_bindings_actors_sha1,
  urn_comunica_default_init_actors_query,
  urn_comunica_default_query_parse_actors_sparql,
  urn_comunica_default_query_parse_actors_graphql,
  urn_comunica_default_optimize_query_operation_actors_rewrite_copy,
  urn_comunica_default_optimize_query_operation_actors_rewrite_move,
  urn_comunica_default_optimize_query_operation_actors_rewrite_add,
  urn_comunica_default_optimize_query_operation_actors_describe_to_constructs_subject,
  urn_comunica_default_optimize_query_operation_actors_assign_sources_exhaustive,
  urn_comunica_default_optimize_query_operation_actors_join_bgp,
  urn_comunica_default_optimize_query_operation_actors_bgp_to_join,
  urn_comunica_default_optimize_query_operation_actors_join_connected,
  urn_comunica_default_optimize_query_operation_actors_prune_empty_source_operations,
  urn_comunica_default_optimize_query_operation_actors_filter_pushdown,
  urn_comunica_default_optimize_query_operation_actors_group_sources,
  urn_comunica_default_query_result_serialize_actors_json,
  urn_comunica_default_query_result_serialize_actors_rdf,
  urn_comunica_default_query_result_serialize_actors_simple,
  urn_comunica_default_query_result_serialize_actors_csv,
  urn_comunica_default_query_result_serialize_actors_sparql_json,
  urn_comunica_default_query_result_serialize_actors_sparql_tsv,
  urn_comunica_default_query_result_serialize_actors_sparql_xml,
  urn_comunica_default_query_result_serialize_actors_stats,
  urn_comunica_default_query_result_serialize_actors_table,
  urn_comunica_default_query_result_serialize_actors_tree,
  urn_comunica_default_dereference_actors_http,
  urn_comunica_default_dereference_actors_fallback,
  urn_comunica_default_query_source_identify_hypermedia_actors_qpf,
  urn_comunica_default_rdf_resolve_quad_pattern_actors_sparql,
  urn_comunica_default_query_source_identify_hypermedia_actors_none,
  urn_comunica_default_dereference_rdf_actors_parse,
  urn_comunica_default_rdf_join_entries_sort_actors_cardinality,
  urn_comunica_default_rdf_metadata_actors_primary_topic,
  urn_comunica_default_rdf_metadata_actors_all,
  urn_comunica_default_rdf_join_selectivity_actors_variable_counting,
  urn_comunica_default_rdf_metadata_accumulate_actors_cancontainundefs,
  urn_comunica_default_rdf_metadata_accumulate_actors_cardinality,
  urn_comunica_default_rdf_metadata_accumulate_actors_pagesize,
  urn_comunica_default_rdf_metadata_accumulate_actors_requesttime,
  urn_comunica_default_rdf_parse_html_actors_microdata,
  urn_comunica_default_rdf_parse_html_actors_rdfa,
  urn_comunica_default_rdf_parse_html_actors_script,
  urn_comunica_default_rdf_parse_actors_n3,
  urn_comunica_default_rdf_parse_actors_jsonld,
  urn_comunica_default_rdf_parse_actors_rdfxml,
  urn_comunica_default_rdf_parse_actors_xmlrdfa,
  urn_comunica_default_rdf_parse_actors_html,
  urn_comunica_default_rdf_parse_actors_shaclc,
  urn_comunica_default_rdf_resolve_hypermedia_links_actors_next,
  urn_comunica_default_rdf_resolve_hypermedia_links_queue_actors_fifo,
  urn_comunica_default_rdf_metadata_extract_actors_hydra_controls,
  urn_comunica_default_rdf_metadata_extract_actors_hydra_count,
  urn_comunica_default_rdf_metadata_extract_actors_hydra_pagesize,
  urn_comunica_default_rdf_metadata_extract_actors_request_time,
  urn_comunica_default_rdf_metadata_extract_actors_allow_http_methods,
  urn_comunica_default_rdf_metadata_extract_actors_put_accepted,
  urn_comunica_default_rdf_metadata_extract_actors_patch_sparql_update,
  urn_comunica_default_rdf_metadata_extract_actors_sparql_service,
  urn_comunica_default_rdf_serialize_actors_n3,
  urn_comunica_default_rdf_serialize_actors_jsonld,
  urn_comunica_default_rdf_serialize_actors_shaclc,
  urn_comunica_default_rdf_update_hypermedia_actors_patch_sparql_update,
  urn_comunica_default_rdf_update_hypermedia_actors_put_ldp,
  urn_comunica_default_rdf_update_hypermedia_actors_sparql,
  urn_comunica_default_rdf_update_quads_actors_hypermedia,
  urn_comunica_default_rdf_update_quads_actors_rdfjs_store,
  urn_comunica_default_query_operation_actors_bgp,
  urn_comunica_default_query_operation_actors_extend,
  urn_comunica_default_query_operation_actors_ask,
  urn_comunica_default_query_operation_actors_construct,
  urn_comunica_default_query_operation_actors_distinct,
  urn_comunica_default_query_operation_actors_minus,
  urn_comunica_default_query_operation_actors_join,
  urn_comunica_default_query_operation_actors_filter,
  urn_comunica_default_query_operation_actors_from,
  urn_comunica_default_query_operation_actors_orderby,
  urn_comunica_default_query_operation_actors_nop,
  urn_comunica_default_query_operation_actors_project,
  urn_comunica_default_query_operation_actors_source,
  urn_comunica_default_query_operation_actors_values,
  urn_comunica_default_query_operation_actors_service,
  urn_comunica_default_query_operation_actors_leftjoin,
  urn_comunica_default_query_operation_actors_group,
  urn_comunica_default_query_operation_actors_reduced,
  urn_comunica_default_query_operation_actors_path_nps,
  urn_comunica_default_query_operation_actors_path_link,
  urn_comunica_default_query_operation_actors_path_alt,
  urn_comunica_default_query_operation_actors_slice,
  urn_comunica_default_query_operation_actors_path_inv,
  urn_comunica_default_query_operation_actors_union,
  urn_comunica_default_query_operation_actors_update_clear,
  urn_comunica_default_query_operation_actors_update_create,
  urn_comunica_default_query_operation_actors_update_drop,
  urn_comunica_default_query_operation_actors_path_zero_or_one,
  urn_comunica_default_query_operation_actors_path_zero_or_more,
  urn_comunica_default_query_operation_actors_update_load,
  urn_comunica_default_query_operation_actors_update_delete_insert,
  urn_comunica_default_query_operation_actors_path_seq,
  urn_comunica_default_query_process_actors_explain_parsed,
  urn_comunica_default_query_operation_actors_update_composite,
  urn_comunica_default_query_process_actors_explain_physical,
  urn_comunica_default_http_actors_proxy,
  urn_comunica_default_http_actors_fetch,
  urn_comunica_default_http_actors_wayback,
  urn_comunica_default_query_operation_actors_path_one_or_more,
  urn_comunica_default_query_process_actors_sequential,
  urn_comunica_default_query_source_identify_actors_hypermedia,
  urn_comunica_default_query_process_actors_explain_logical,
  urn_comunica_default_query_source_identify_actors_rdfjs,
  urn_comunica_default_query_source_identify_actors_serialized,
  urn_comunica_default_rdf_join_actors_inner_none,
  urn_comunica_default_rdf_join_actors_inner_single,
  urn_comunica_default_rdf_join_actors_inner_multi_empty,
  urn_comunica_default_rdf_join_actors_inner_multi_bind_source,
  urn_comunica_default_rdf_join_actors_inner_multi_bind,
  urn_comunica_default_rdf_join_actors_inner_hash,
  urn_comunica_default_rdf_join_actors_inner_symmetric_hash,
  urn_comunica_default_rdf_join_actors_inner_nested_loop,
  urn_comunica_default_rdf_join_actors_inner_multi_smallest,
  urn_comunica_default_rdf_join_actors_inner_multi_smallest_filter_bindings,
  urn_comunica_default_rdf_join_actors_minus_hash,
  urn_comunica_default_rdf_join_actors_minus_hash_undef,
  urn_comunica_default_rdf_join_actors_optional_bind,
  urn_comunica_default_rdf_join_actors_optional_nested_loop
]);
return urn_comunica_default_init_actors_query;
}

