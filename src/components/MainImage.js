import mainImage from '../assets/git-contribution-graph.png'

export default function MainImage() {
    return (
        <div id="full-image-container">
            <img src={mainImage} alt="GitHub commit background" />
        </div>
    )
}