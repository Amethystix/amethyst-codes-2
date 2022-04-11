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
            <p>
              Hi, I&apos;m Lauren! Currently, I&apos;m a Full Stack Software Engineer
              based in NYC working at Twitter on Experimentation. I&apos;ve written
              both frontend and backend services using a wide range of
              technologies, including React, GraphQL, Express, and many more.
              I&apos;m also currently working part-time as an adjunct at New York
              University teaching a lab section of undergraduate Data
              Structures. I love teaching, and hope to start mentoring more
              young women early in their careers.
            </p>
            <p>
              In my free time, I love to cook, play video games, draw, read, and
              write: both fiction and code. I dream big, and hope to someday
              publish a novel, and publish an indie game (workin&apos; on it!). I
              love to try new things; I&apos;ve been taking ceramic classes for the
              past few months, and have a laundry list of other things to try.
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
              <li>GraphQL</li>
              <li>Next.js</li>
              <li>Kafka</li>
              <li>Express</li>
              <li>Finatra</li>
              <li>Finagle</li>
              <li>Jest + React Testing Library</li>
              <li>Docker</li>
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
              <img src="./twitter-logo.png" />
              <div className={styles.description}>
                <div>Twitter Inc</div>
                <div>Software Engineer II</div>
                <div>January 2021 - Present</div>
              </div>
            </div>
            <div className={styles.workBox}>
              <img src="./nyu.png" />
              <div className={styles.description}>
                <div>New York University</div>
                <div>Adjunct Instructor for CSCI-102 Data Structures</div>
                <div>January 2022 - Present</div>
              </div>
            </div>
            <h3>Past Experience</h3>
            <div className={styles.workBox}>
              <img src="./ww-logo.png" />
              <div className={styles.description}>
                <div>WW International</div>
                <div>Software Engineer II</div>
                <div>May 2018 - December 2021</div>
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
                  A mobile game to be released on Android and iOS. Made with
                  Unity2D. Release date TBD!
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
