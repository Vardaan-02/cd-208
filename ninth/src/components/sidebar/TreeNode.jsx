import { File, FolderClosed, FolderOpen } from "lucide-react";
import useFileStore from "../../store/useFileStore";

export default function TreeNode({ node, level }) {
    const selectedId = useFileStore((state) => state.selectedId);
    const selectNode = useFileStore((state) => state.selectNode);
    const toggleFolderAction = useFileStore((state) => state.toggleFolderAction);

    const handleClick = () => {
        selectNode(node.id);

        if (node.type === 'folder') {
            toggleFolderAction(node.id);
        }
    }

    const isSelected = selectedId === node.id;


    return (
        <div>
            <div className={`flex gap-4 node ${isSelected ? "bg-gray-500" : ""}`} style={{ paddingLeft: `${level * 16 + 12}px` }} onClick={handleClick}>
                <span className="icon">{
                    node.type === "folder" ?
                        node.expanded ?
                            <FolderOpen />
                            : <FolderClosed />
                        : <File />
                }</span>
                {node.name}
            </div>
            {node.type === 'folder' && node.expanded &&
                node.children.map((child, index) => {
                    return <TreeNode key={`${node.id}-${index}`} node={child} level={level + 1} />
                })}
        </div>
    );
}