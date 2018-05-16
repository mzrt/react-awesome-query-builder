import React, {Component} from 'react';
import {Query, Builder, Preview, Utils} from 'react-awesome-query-builder';
const {queryBuilderFormat, queryString} = Utils;
import config from './config';
var stringify = require('json-stringify-safe');
import '../../css/reset.scss';
import '../../css/styles.scss';
import '../../css/compact_styles.scss';
import '../../css/denormalize.scss';
const Immutable = require('immutable');
const transit = require('transit-immutable-js');

/*
let ruleset = {
    "condition": "AND",
    "rules": [
        {
            "id": "name",
            "field": "name",
            "type": "string",
            "input": "text",
            "operator": "less",
            "value": "test name"
        },
        {
            "condition": "OR",
            "rules": [
                {
                    "id": "category",
                    "field": "date",
                    "type": "date",
                    "input": "date",
                    "operator": "equal",
                    "value": "2012-01-12"
                },
                {
                    "id": "category",
                    "field": "name",
                    "type": "string",
                    "input": "text",
                    "operator": "equal",
                    "value": "1"
                }
            ]
        }
    ]
}
*/


export default class DemoQueryBuilder extends Component {
    getChildren(props) {
        const jsonStyle = { backgroundColor: 'darkgrey', margin: '10px', padding: '10px' } 
        if (__ONLY_BUILDER__){
            return (<div style={{padding: '10px'}}>
                                    <div className="query-builder">
                                        <Builder {...props} />
                                    </div>
                                </div>)
        }
        return (<div style={{padding: '10px'}}>
                        <div className="query-builder">
                            <Builder {...props} />
                        </div>
                        <br />
                                        <div>
                                          stringFormat: 
                                          <pre style={jsonStyle}>
                                            {stringify(queryString(props.tree, props.config), undefined, 2)}
                                          </pre>
                                        </div>
                                        <hr/>
                                        <div>
                                          humanStringFormat: 
                                          <pre style={jsonStyle}>
                                            {stringify(queryString(props.tree, props.config, true), undefined, 2)}
                                          </pre>
                                        </div>
                                        <hr/>
                                        <div>
                                          queryBuilderFormat: 
                                            <pre style={jsonStyle}>
                                              {stringify(queryBuilderFormat(props.tree, props.config), undefined, 2)}
                                            </pre>
                                        </div>
                                        <hr/>
                                        <div>
                                          Tree: 
                                          <pre style={jsonStyle}>
                                            {stringify(props.tree, undefined, 2)}
                                          </pre>
                                        </div>
                                        <hr/>
                                        <div>
                                          Immutable Tree: 
                                          <div style={jsonStyle}>
                                            {transit.toJSON(props.tree)}
                                          </div>
                                        </div>
                    </div>);
    }

    render() {
        let initValueJSON = '["~#iM",["type","group","id","9a99988a-0123-4456-b89a-b1607f326fd8","children1",["~#iOM",["a98ab9b9-cdef-4012-b456-71607f326fd9",["^0",["type","rule","id","a98ab9b9-cdef-4012-b456-71607f326fd9","properties",["^0",["field","color","operator","select_any_in","value",["~#iL",[["green","orange"]]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["multiselect"]]]]]],"88b9998b-0123-4456-b89a-b161adab811d",["^0",["type","rule","id","88b9998b-0123-4456-b89a-b161adab811d","properties",["^0",["field","num","operator","not_between","value",["^2",[-1,2]],"valueSrc",["^2",["value","value"]],"operatorOptions",null,"valueType",["^2",["number","number"]]]]]],"8bb98898-89ab-4cde-b012-3161adac69c3",["^0",["type","group","id","8bb98898-89ab-4cde-b012-3161adac69c3","properties",["^0",["conjunction","OR"]],"children1",["^1",["88b8ba8b-cdef-4012-b456-7161adabbd8c",["^0",["type","rule","id","88b8ba8b-cdef-4012-b456-7161adabbd8c","properties",["^0",["field","expecting","operator","equal","value",["^2",[true]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["boolean"]]]]]],"9aaabab8-4567-489a-bcde-f161adac69c4",["^0",["type","rule","id","9aaabab8-4567-489a-bcde-f161adac69c4","properties",["^0",["field","prox2","operator","proximity","value",["^2",["name2",""]],"valueSrc",["^2",["field","value"]],"operatorOptions",["^0",["proximity",2]],"conjunction","AND","valueType",["^2",[null,"text"]]]]]],"aa9aaaa9-0123-4456-b89a-b161adac9bb5",["^0",["type","rule","id","aa9aaaa9-0123-4456-b89a-b161adac9bb5","properties",["^0",["field","datetime","operator","between","value",["^2",["datetime2","datetime2"]],"valueSrc",["^2",["field","field"]],"operatorOptions",null,"valueType",["^2",[null,null]]]]]],"a8aa8aaa-0123-4456-b89a-b161adb777eb",["^0",["type","rule","id","a8aa8aaa-0123-4456-b89a-b161adb777eb","properties",["^0",["field","name2","operator","not_equal","value",["^2",[null]],"valueSrc",["^2",["value"]],"valueType",["^2",[null]]]]]]]]]],"bb898998-cdef-4012-b456-7161adad59da",["^0",["type","rule","id","bb898998-cdef-4012-b456-7161adad59da","properties",["^0",["field","color2","operator","select_not_any_in","value",["^2",[["green"]]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["multiselect"]]]]]],"99aaaa8b-89ab-4cde-b012-3161adadd7ad",["^0",["type","rule","id","99aaaa8b-89ab-4cde-b012-3161adadd7ad","properties",["^0",["field","stock","operator","equal","value",["^2",["expecting"]],"valueSrc",["^2",["field"]],"operatorOptions",null,"valueType",["^2",[null]]]]]],"b9999aaa-4567-489a-bcde-f161adb16730",["^0",["type","rule","id","b9999aaa-4567-489a-bcde-f161adb16730","properties",["^0",["field","date","operator","less","value",["^2",["2018-02-23"]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["date"]]]]]],"9a9b9bb9-0123-4456-b89a-b161b15a91da",["^0",["type","rule","id","9a9b9bb9-0123-4456-b89a-b161b15a91da","properties",["^0",["field","num","operator","is_empty","value",["^2",[]],"valueSrc",["^2",[]],"operatorOptions",null,"valueType",["^2",[]]]]]]]],"properties",["^0",["conjunction","AND"]]]]';

        const {tree, ...config_props} = config;
                
        return (
            <div>
                <Query 
                    value={transit.fromJSON(initValueJSON)}
                    {...config_props} 
                    get_children={this.getChildren}
                > </Query>
            </div>
        );
    }
}
