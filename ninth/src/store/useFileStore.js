import { create } from "zustand";

const init = [
    {
        id: 1,
        name: "src",
        type: "folder",
        expanded: true,
        children: [
            {
                id: 2,
                name: "random",
                type: "folder",
                expanded: true,
                children: [
                    { id: 3, name: "name.txt", type: "file" },
                    { id: 4, name: "age.txt", type: "file" }
                ]
            },
            { id: 5, name: "second.txt", type: "file" }
        ]
    },
    { id: 6, name: "package.json", type: "file" }
]

function addNode(nodes, parentId, newNode) {
    return nodes.map((node) => {
        if (node.id === parentId && node.type === "folder") {
            return {
                ...node,
                expanded: true,
                children: [...node.children, newNode],
            }
        }
        else if (node.children) {
            return {
                ...node,
                children: addNode(node.children, parentId, newNode)
            }
        }

        return node;
    })
}

function renameNode(nodes, id, newName) {
    return nodes.map((node) => {
        if (node.id === id) {
            return {
                ...node,
                name: newName
            }
        }
        else if (node.children) {
            return {
                ...node,
                children: renameNode(node.children, id, newName)
            }
        }
        return node;
    })
}

function toggleFolder(nodes, id) {
    return nodes.map((node) => {
        if (node.id === id && node.type === 'folder') {
            return {
                ...node,
                expanded: !node.expanded
            }
        }
        else if (node.children) {
            return {
                ...node,
                children: toggleFolder(node.children, id)
            }
        }
        return node;
    })
}

function deleteNode(nodes, id) {
    nodes
        .filter((node) => { return node.id !== id })
        .map((node) => {
            if (node.children) {
                return {
                    ...node,
                    children: deleteNode(node.children, id)
                }
            }
            return node;
        })
}

const useFileStore = create((set, get) => ({
    tree: init,
    selectedId: null,

    selectNode: (id) => set({
        selectedId: id
    }),

    toggleFolderAction: (id) => set((state) => ({
        tree: toggleFolder(state.tree, id)
    })),

    addFile: () => {
        const id = get().selectedId;
        const name = prompt("Enter file name");

        if (!name || !id) return;

        set((state) => ({
            tree: addNode(state.tree, id, {
                id: Date.now(),
                name,
                type: "file"
            })
        }));
    },

    addFolder: () => {
        const id = get().selectedId;
        const name = prompt("Enter folder name");

        if (!name || !id) return;

        set((state) => ({
            tree: addNode(state.tree, id, {
                id: Date.now(),
                name,
                type: "folder",
                expanded: false,
                children: [],
            })
        }))
    },

    rename: () => {
        const id = get().selectedId;
        const name = prompt("Enter new Name");

        if (!name || !id) return;

        set((state) => ({
            tree: renameNode(state.tree, id, name)
        }));
    },

    deleteSelected: () => {
        const id = get().selectedId;

        if (!id) return;

        set((state) => ({
            tree: deleteNode(state.tree, id),
            selectedId: null
        }))
    }
}));

export default useFileStore;