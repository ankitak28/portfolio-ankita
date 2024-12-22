import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';
const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src= {getImageUrl("about/aboutImage.png")}
                  alt="Me sitting with a laptop"/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                <div >
                    <h3>Full-Stack Developer</h3>
                    <p>I'm a full-stack developer in building responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                <div >
                    <h3>Backend Developer</h3>
                    <p>I have experience building fast and optimized backend and APIs</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
                <div >
                    <h3>Security Analyst</h3>
                    <p>I have experience for scanning application using Veracode and ASE portal to find vulnerabiities in the application and manage it to make it more secure</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About