import PropTypes from "prop-types"

const Project = ({ id, name, gif, url, techStack, description}) => {
    return (
        <section>
        <div className='projects-content-container fi-element fade-in'>
            <div>
                <img id={id} className='demo' src={gif}/>
            </div>
            <div className='projects-content-text'>
                <h1>{name}</h1>
                <h2>(<a href={url}>Github</a>) {techStack} </h2>
                <p>{description}</p>
            </div>
        </div>
        </section>
    )
}

Project.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gif: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Project