import type { NextPage } from "next";
import Mine from "../components/Mine";
import Surface from "../components/Surface";
import DirtLayer from "../components/DirtLayer";
import styles from "../styles/Home.module.scss";
import InfoBox from "../components/InfoBox";
import { GemStones } from "../types/gems";

const Home: NextPage = () => {
  return (
    <>
      <Surface />
      <DirtLayer />
      <Mine>
        <InfoBox
          title="About Me"
          gem={GemStones.Amethyst}
          img={<img src={"./me.png"} />}
        >
          <div>
            <p>Hi, I'm Lauren, a full stack engineer from NYC. Currently, I'm working at Tono Health as a founding engineer, and am having a blast working at an early-stage company! Throughout my various roles, I've accumulated experience working with many frontend and backend frameworks, primarily using TypeScript. I'm happy to say I was an early adapter of Next.js, and consider it one of my favorite frameworks to work with!</p>
            <p>I've previously worked at Twitter on the experimentation team as a Senior Software Engineer, and at WeightWatchers as a growth engineer. I also adjunct some semesters at New York University teaching a recitation of Data Structures to undergraduates. I love being able to teach college students and mentor early-career software engineers, and am hoping to start mentoring more young women early in their careers.</p>
            <p>
              In my free time, I love to cook, play video games, draw, read, and
              write: both fiction and code. I like to dream big, and hope to someday
              publish a novel, and publish more games. In general, I'm a very open-minded person who loves to try new things.
            </p>
          </div>
        </InfoBox>

        <InfoBox
          title="Education"
          direction="right"
          gem={GemStones.Diamond}
          img={<img src={"./nyu.png"} />}
        >
          <div className={styles.educationList}>
            <div>New York University</div>
            <div>BA in Computer Science</div>
            <div>Minor in Web Programming</div>
            <div>GPA: 3.75 (Cum Laude)</div>
            <div>May 2019</div>
          </div>
        </InfoBox>

        <InfoBox title="Skills" gem={GemStones.Emerald}>
          <div className={styles.skillsList}>
            <ul>
              <h4>Languages</h4>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS + SASS</li>
              <li>Scala</li>
              <li>Lua</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>C#</li>
            </ul>
            <ul>
              <h4>Technologies</h4>
              <li>React</li>
              <li>Docker</li>
              <li>Next.js</li>
              <li>TRPC</li>
              <li>AWS Lambda</li>
              <li>GraphQL</li>
              <li>Kafka</li>
              <li>Jest + React Testing Library</li>
              <li>LÖVE2d</li>
              <li>Unity</li>
            </ul>
            <ul>
              <h4>Other</h4>
              <li>Leadership</li>
              <li>Game Development</li>
              <li>Tutoring + Teaching</li>
              <li>Spriting</li>
              <li>Writing</li>
              <li>Public speaking</li>
              <li>Graphic design</li>
            </ul>
          </div>
        </InfoBox>
        <InfoBox
          direction="right"
          title="Work Experience"
          gem={GemStones.RoseQuartz}
        >
          <div className={styles.workExperience}>
          <div className={styles.workBox}>
              <img src="./tono-logo.png" />
              <div className={styles.description}>
                <div>Tono Health</div>
                <div>Founding Engineer</div>
                <div>September 2022 - Present</div>
              </div>
            </div>
            <h3>Past Experience</h3>
            <div className={styles.workBox}>
              <img src="./twitter-logo.png" />
              <div className={styles.description}>
                <div>Twitter Inc</div>
                <div>Senior Software Engineer</div>
                <div>January 2021 - September 2022</div>
              </div>
            </div>
            <div className={styles.workBox}>
              <img src="./nyu.png" />
              <div className={styles.description}>
                <div>New York University</div>
                <div>Adjunct Instructor for CSCI-102 Data Structures</div>
                <div>Spring 2022 & Fall 2022</div>
              </div>
            </div>
            <div className={styles.workBox}>
              <img src="./ww-logo.png" />
              <div className={styles.description}>
                <div>WW International</div>
                <div>Software Engineer II</div>
                <div>May 2018 - December 2020</div>
              </div>
            </div>
          </div>
        </InfoBox>
        <InfoBox title="Projects" gem={GemStones.Sapphire}>
          <div className={styles.workExperience}>
            <div className={styles.workBox}>
              <img src="./stackit.png" />
              <div className={styles.description}>
                <h3>StackIt!</h3>
                <div>
                  A mobile game on iOS where the objective is to stack Boxy the box as high as you can in under a minute! Made with Unity 2D, <a className={styles.link} rel="noopener" target="_blank" href='https://apps.apple.com/us/app/stackit-2d/id1631021639'>check it out on the App Store!</a>
                </div>
              </div>
            </div>
          </div>
        </InfoBox>
        <InfoBox title="Links" gem={GemStones.Amethyst} direction="right">
          <div className={styles.linkContainer}>
            <a
              className={styles.github}
              href="https://www.github.com/amethystix"
            />
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/lauren-digiovanni-4b9601119/"
            />
            <a
              className={styles.twitter}
              href="https://twitter.com/thelaurenax"
            />
            <a
              className={styles.email}
              href="mailto:admin@amethyst.codes?Subject=Reaching%20out!"
            />
          </div>
        </InfoBox>
      </Mine>
    </>
  );
};

export default Home;
