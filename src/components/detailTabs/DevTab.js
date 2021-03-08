import React from 'react';
import * as go from 'gojs';
import { ReactDiagram, ReactOverview, ReactPalette } from 'gojs-react';

export const DevTab = () => {

    const initDiagram = () => {
        const $ = go.GraphObject.make;
        // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
        const diagram =
            $(go.Diagram,
            {
              'undoManager.isEnabled': true,  // must be set to allow for model change listening
                // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
                'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
                model: $(go.GraphLinksModel,
                {
                  linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                })
            });
    
        // define a simple Node template
        diagram.nodeTemplate =
          $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                // Shape.fill is bound to Node.data.color
                new go.Binding('fill', 'color')),
                $(go.TextBlock,
                { margin: 8, editable: true },  // some room around the text
                new go.Binding('text').makeTwoWay()
            )
        );
    
        return diagram;
    }
    
    /**
     * This function handles any changes to the GoJS model.
     * It is here that you would make any updates to your React state, which is dicussed below.
     */
    const handleModelChange = (data) => {
        const insertedNodeKeys = data.insertedNodeKeys;
        const modifiedNodeData = data.modifiedNodeData;
        const removedNodeKeys = data.removedNodeKeys;
        const insertedLinkKeys = data.insertedLinkKeys;
        const modifiedLinkData = data.modifiedLinkData;
        const removedLinkKeys = data.removedLinkKeys;
        console.log('GoJS model changed!', data);
    }

    return (
        <div>
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName='diagram-component'
                nodeDataArray={[
                    { key: 1, text: 'Tomcat', color: 'orange', loc: '150 0' },
                    { key: 2, text: 'Apache', color: 'lightgreen', loc: '0 150' },
                    { key: 3, text: 'AWS', color: 'pink', loc: '150 150' }
                ]}
                linkDataArray={[
                    { key: -3, from: 1, to: 1 },
                    { key: -4, from: 2, to: 3 },
                    { key: -5, from: 3, to: 1 }
                ]}
                onModelChange={handleModelChange}
            />
        </div>
    )
}