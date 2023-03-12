export default function Container({ children, config }) {
    return <div className={"container mx-auto px-16 relative z-40 "+config}>{children}</div>
}