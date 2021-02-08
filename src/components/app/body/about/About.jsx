import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import "./about.scss"

export default function About(){
    return (
        <div className="about">
            JSA McGill
            <div>

                We are a student association based at McGill University that intends to:
                <div> Who are we?</div>
                <div> JSA McGill is a rapidly-growing social/cultural organization whose goals are to promote Japanese culture and language in the local community through various events hosted throughout the school year.</div>
                <div>
                    * Raise awareness of traditional and modern Japanese culture.
                    * Create opportunities for both Japanese and non-Japanese students to practice and learn the language.
                    * Aid students in finding opportunities to work or intern at Japanese companies or global companies based in Japan.
                    * Raise funds for charities in Japan that support the well-being of the country e.g. the Tohoku relief.
                    * Provide students with opportunities for socializing and involvement, through social events and volunteering, from which friendships and community are built.
                    * Create a local Japanese community and Japanese Alumni network for the purpose of sharing information and resources.
                    * We are a very diverse group of students and although some of our members are indeed Japanese, there are many non-Japanese members as well. Even though we have varying backgrounds, we all have a common interest in Japanese culture!
                </div>
            </div>
        </div>
    );
}

