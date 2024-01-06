import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return (<div className="p-4 bg-white border rounded-md shadow-md border-slate-300">
        <p className="text-sm text-slate-400">{props.date}</p>

        <Link href={`posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:underline">{props.title}</h2>
        </Link>
        <p className="text-slate-700">{props.subtitle}</p>
        
    </div>
    );
};

export default postPreview;