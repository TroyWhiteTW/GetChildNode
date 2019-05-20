const getChildNode = (oNode, aLayer) => {
    let oTargetNode = oNode;

    for (let iValue of aLayer.values()) {
        oTargetNode = oTargetNode.children[iValue];
    }

    return oTargetNode;
};