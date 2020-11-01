import React, {Component} from 'react';
import './projectcard.scss';
import ProjectModal from '../Components/ProjectModal';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }
    
    showModal = () => {
        this.setState({ modal: true });
    };
    
    hideModal = () => {
        this.setState({ modal: false });
    };

    render() {
        const {tittle, techs, desc, visit, code, cardimage} = this.props;
        return(
            <div className='card'>
                <div className='card-header'>
                    {tittle}
                </div>
                <div className='card-content' style={{backgroundImage: 'url('+cardimage+')'}}></div>
                <div className='card-footer' onClick={this.showModal}>
                    View this project
                </div>
                <ProjectModal show={this.state.modal} handleClose={this.hideModal} tittle={tittle} techs={techs} desc={desc} visit={visit} code={code}/>
            </div>    
        )
    }
}

export default ProjectCard;