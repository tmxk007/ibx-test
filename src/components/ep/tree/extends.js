// 按键类型
const keyTypes = {
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    space: 13,
    enter: 32
}

// 筛选节点索引
let filterNodeIndex = -1;
// 筛选节点
let filterNodes = null;

export default {
    methods: {
        handelKeydown(ev) {
            const keyCode = ev.keyCode;
            const currentNode = this.store.currentNode;
            const currentIndex = currentNode.id - 1;
            const currentItem = this.treeItemArray[currentIndex];

            if ([keyTypes.up, keyTypes.down].includes(keyCode)) {
                let currNode = currentItem.__vue__.node;
                currentNode.expand();
                let nextIndex = keyCode == keyTypes.up ? currentIndex - 1 : currentIndex + 1;
                if (nextIndex == -1) nextIndex = this.treeItemArray.length - 1;
                if (nextIndex >= this.treeItemArray.length) nextIndex = 0;
                let nextNode = this.treeItemArray[nextIndex].__vue__.node;
                this.store.setCurrentNode(nextNode);
            }

            const hasInput = currentItem.querySelector('[type="checkbox"]');

            // left、right 展开
            if ([keyTypes.left, keyTypes.right].includes(keyCode)) {
                if (keyCode == keyTypes.left) {
                    currentNode.collapse();
                }
                else {
                    currentNode.expand();
                }
            }

            // space enter选中checkbox
            if ([keyTypes.space, keyTypes.enter].includes(keyCode)) {
                if (hasInput) {
                    hasInput.click();
                }
                ev.stopPropagation();
                ev.preventDefault();
            }
        },
        // 筛选框值改变
        filterChange() {
            filterNodeIndex = -1;
            filterNodes = null;
        },
        // 筛选节点
        filterNode(filterText, isPrveMove) {
            let tree = this;

            if (filterNodes == null) {
                filterNodes = [];

                let treeItemArray = tree.treeItemArray;
                let reg = new RegExp(filterText, "gi");

                for (let i = 0; i < treeItemArray.length; i++) {
                    let item = treeItemArray[i];
                    let node = item.__vue__.node;
                    let dataText = node.label;

                    if (reg.test(dataText)) {
                        dataText = dataText.replace(reg, function ($1) {
                            return "<span style='background:yellow;color:black'>" + $1 + "</span>";
                        });
                        filterNodes.push(node);
                    }
                    item.children[0].children[1].innerHTML = dataText;
                }
                filterNodeIndex = isPrveMove ? filterNodes.length : -1;
            }

            filterNodeIndex = isPrveMove ? filterNodeIndex - 1 : filterNodeIndex + 1;
            let node = filterNodes[filterNodeIndex];

            if (!node) {
                filterNodeIndex = isPrveMove ? filterNodes.length - 1 : 0;
                node = filterNodes[filterNodeIndex];
            }

            tree.store.setCurrentNode(node);
        }
    }
}