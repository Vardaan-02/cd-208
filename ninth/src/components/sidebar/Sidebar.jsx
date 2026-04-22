import useFileStore from "../../store/useFileStore";
import TreeNode from "./TreeNode";

export default function Sidebar() {
    const tree = useFileStore((state) => state.tree);
    
    return (
        <div className="h-screen w-96 border-4">
            {/* Hello World */}
            <div>
                {tree.map((node, index) => {
                    return <TreeNode
                        key={`${node.id}-${index}`}
                        node={node}
                        level={0}
                    />
                })}
            </div>
        </div>
    );
}