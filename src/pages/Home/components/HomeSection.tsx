import "../../../assets/styles/components/HomeSection.scss";

type Props = {
    title: string;
}

const HomeSection = (Props: Props) => {
    return <div className="home-section">
        <h1>{Props.title}</h1>
        <div>
            <h2>Simply create your documentation. Keep it to yourself or share it to the world</h2>
        </div>
        <button>Start now</button>
    </div>
}

export default HomeSection;