import React from 'react';
import * as go from 'gojs';
import {
    ReactDiagram,
    ReactOverview,
    ReactPalette
} from 'gojs-react';

export const PreProdTab = () => {

    function init() {
        // if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
        var $ = go.GraphObject.make;

        ReactDiagram =
            $(go.Diagram, "myDiagramDiv", {
                "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                "undoManager.isEnabled": true
            });

        // when the document is modified, add a "*" to the title and enable the "Save" button
        ReactDiagram.addDiagramListener("Modified", function (e) {
            var button = document.getElementById("saveModel");
            if (button) button.disabled = !ReactDiagram.isModified;
            var idx = document.title.indexOf("*");
            if (ReactDiagram.isModified) {
                if (idx < 0) document.title += "*";
            } else {
                if (idx >= 0) document.title = document.title.substr(0, idx);
            }
        });

        ReactDiagram.nodeTemplateMap.add("Generator",
            $(go.Node, "Spot", {
                    locationSpot: go.Spot.Center,
                    selectionObjectName: "BODY"
                },
                new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "ACVoltageSource", {
                    name: "BODY",
                    stroke: "white",
                    strokeWidth: 3,
                    fill: "transparent",
                    background: "darkblue",
                    width: 40,
                    height: 40,
                    margin: 5,
                    portId: "",
                    fromLinkable: true,
                    cursor: "pointer",
                    fromSpot: go.Spot.TopBottomSides,
                    toSpot: go.Spot.TopBottomSides
                }),
                $(go.TextBlock, {
                        alignment: go.Spot.Right,
                        alignmentFocus: go.Spot.Left,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ));

        ReactDiagram.nodeTemplateMap.add("Connector",
            $(go.Node, "Spot", {
                    locationSpot: go.Spot.Center,
                    selectionObjectName: "BODY"
                },
                new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Circle", {
                    name: "BODY",
                    stroke: null,
                    fill: $(go.Brush, "Linear", {
                        0: "lightgray",
                        1: "gray"
                    }),
                    background: "gray",
                    width: 20,
                    height: 20,
                    margin: 2,
                    portId: "",
                    fromLinkable: true,
                    cursor: "pointer",
                    fromSpot: go.Spot.TopBottomSides,
                    toSpot: go.Spot.TopBottomSides
                }),
                $(go.TextBlock, {
                        alignment: go.Spot.Right,
                        alignmentFocus: go.Spot.Left,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ));

        ReactDiagram.nodeTemplateMap.add("Consumer",
            $(go.Node, "Spot", {
                    locationSpot: go.Spot.Center,
                    locationObjectName: "BODY",
                    selectionObjectName: "BODY"
                },
                new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Picture, "images/pc.jpg", {
                    name: "BODY",
                    width: 50,
                    height: 40,
                    margin: 2,
                    portId: "",
                    fromLinkable: true,
                    cursor: "pointer",
                    fromSpot: go.Spot.TopBottomSides,
                    toSpot: go.Spot.TopBottomSides
                }),
                $(go.TextBlock, {
                        alignment: go.Spot.Right,
                        alignmentFocus: go.Spot.Left,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ));

        ReactDiagram.nodeTemplateMap.add("HBar",
            $(go.Node, "Spot",
                new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify), {
                    layerName: "Background",
                    // special resizing: just at the ends
                    resizable: true,
                    resizeObjectName: "SHAPE",
                    resizeAdornmentTemplate: $(go.Adornment, "Spot",
                        $(go.Placeholder),
                        $(go.Shape, // left resize handle
                            {
                                alignment: go.Spot.Left,
                                cursor: "col-resize",
                                desiredSize: new go.Size(6, 6),
                                fill: "lightblue",
                                stroke: "dodgerblue"
                            }),
                        $(go.Shape, // right resize handle
                            {
                                alignment: go.Spot.Right,
                                cursor: "col-resize",
                                desiredSize: new go.Size(6, 6),
                                fill: "lightblue",
                                stroke: "dodgerblue"
                            }))
                },
                $(go.Shape, "Rectangle", {
                        name: "SHAPE",
                        fill: "black",
                        stroke: null,
                        strokeWidth: 0,
                        width: 1000,
                        height: 4,
                        minSize: new go.Size(100, 4),
                        maxSize: new go.Size(Infinity, 4)
                    },
                    new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                    new go.Binding("fill"), {
                        portId: "",
                        toLinkable: true
                    }),
                $(go.TextBlock, {
                        alignment: go.Spot.Right,
                        alignmentFocus: go.Spot.Left,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ));

        ReactDiagram.linkTemplate =
            $(BarLink, // subclass defined below
                {
                    routing: go.Link.Orthogonal,
                    relinkableFrom: true,
                    relinkableTo: true,
                    toPortChanged: function (link, oldport, newport) {
                        if (newport instanceof go.Shape) link.path.stroke = newport.fill;
                    }
                },
                $(go.Shape, {
                    strokeWidth: 2
                })
            );

        // start off with a simple diagram
        load();

        // initialize Palette
        ReactPalette =
            $(go.Palette, "myPaletteDiv", {
                nodeTemplateMap: ReactDiagram.nodeTemplateMap,
                layout: $(go.GridLayout, {
                    cellSize: new go.Size(2, 2),
                    isViewportSized: true
                })
            });

        ReactPalette.model.nodeDataArray = [{
                "text": "Generator",
                "category": "Generator"
            },
            {
                "text": "Consumer",
                "category": "Consumer"
            },
            {
                "text": "Connector",
                "category": "Connector"
            },
            {
                "text": "Bar",
                "category": "HBar",
                "size": "100 4"
            },
        ];

        // remove cursors on all ports in the Palette
        // make TextBlocks invisible, to reduce size of Nodes
        ReactPalette.nodes.each(function (node) {
            node.ports.each(function (port) {
                port.cursor = "";
            });
            node.elements.each(function (tb) {
                if (tb instanceof go.TextBlock) tb.visible = false;
            });
        });

        // initialize Overview
        ReactOverview =
            $(go.Overview, "myOverviewDiv", {
                observed: ReactDiagram,
                contentAlignment: go.Spot.Center
            });
    }
    function BarLink() {
        go.Link.call(this);
    }
    go.Diagram.inherit(BarLink, go.Link);

    BarLink.prototype.getLinkPoint = function (node, port, spot, from, ortho, othernode, otherport) {
        if (node.category === "HBar") {
            var op = go.Link.prototype.getLinkPoint.call(this, othernode, otherport, this.computeSpot(!from), !from, ortho, node, port);
            var r = port.getDocumentBounds();
            var y = (op.y > r.centerY) ? r.bottom : r.top;
            if (op.x < r.left) return new go.Point(r.left, y);
            if (op.x > r.right) return new go.Point(r.right, y);
            return new go.Point(op.x, y);
        } else {
            return go.Link.prototype.getLinkPoint.call(this, node, port, spot, from, ortho, othernode, otherport);
        }
    };

    BarLink.prototype.getLinkDirection = function (node, port, linkpoint, spot, from, ortho, othernode, otherport) {
        var p = port.getDocumentPoint(go.Spot.Center);
        var op = otherport.getDocumentPoint(go.Spot.Center);
        var below = op.y > p.y;
        return below ? 90 : 270;
    };
    // end BarLink class


    // save a model to and load a model from JSON text, displayed below the Diagram
    const save = () => {
        document.getElementById("mySavedModel").value = ReactDiagram.model.toJson();
        ReactDiagram.isModified = false;
    }

    const load = () => {
        ReactDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    }

    return ( 
        <div>
            <h1> Pre - production environment </h1>

            <div id="sample">
                <div>
                    <div >
                    <div id="myPaletteDiv" ></div>
                    <div id="myOverviewDiv"></div>
                    </div>
                    <div id="myDiagramDiv"></div>
                </div>

                <div id="buttons">
                    <button id="loadModel" onClick={ load }>Load</button>
                    <button id="saveModel" onClick={ save }>Save</button>
                </div>

                <textarea id="mySavedModel">
                </textarea>
            </div>
        </div>
    )
}