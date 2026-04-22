import useFileStore from "../../store/useFileStore";

export default function Header() {
    const addFile = useFileStore((state) => state.addFile);
    const addFolder = useFileStore((state) => state.addFolder);
    const rename = useFileStore((state) => state.rename);
    const deleteSelected = useFileStore((state) => state.deleteSelected);

    return (
        <div className="w-full h-24">
            <button onClick={addFile} className="px-4 py-1 rounded-2xl bg-zinc-900 text-white">+File</button>
            <button onClick={addFolder} className="px-4 py-1 rounded-2xl bg-zinc-900 text-white">+Folder</button>
            <button onClick={rename} className="px-4 py-1 rounded-2xl bg-zinc-900 text-white">Renmae</button>
            <button onClick={deleteSelected} className="px-4 py-1 rounded-2xl bg-zinc-900 text-white">-Delete</button>
        </div>
    );
}