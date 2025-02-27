import { ContentDropdownItem } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export default function ExpandableMenuItem({ isOpen, content }: { isOpen: boolean, content: ContentDropdownItem; }) {
    return (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out 
            ${isOpen ? "max-h-auto opacity-100 p-4 text-white rounded-b-xl border-t-0 border border-white" : "max-h-0 opacity-0"}`}>
            <div className="text-lg font-fellFrench">
                {content.length === 1 ? content[0] : (
                    <ol className="list-decimal list-inside" type="1">
                        {content.map(element => (
                            <li key={uuidv4()}>{element}</li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
};
