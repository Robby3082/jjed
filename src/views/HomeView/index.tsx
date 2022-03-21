import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SolanaLogo } from "components";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div>
     <section id="banner">
        <section id="navbar">
            <div className="banner-div">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">Sol Islands</a>
                  

                    <button className="navbar-toggler" type="button" style={{position: "relative", left: "10px"}}
                        data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-2x fa-bars"
                                 aria-hidden="true"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav second-links ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#storyline">OurStory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#roadmap">Roadmap</a>
                            </li>
                            <li className="nav-item">
                            <Link href="/gallery">
                  <a className="nav-link">
                 NFT Gallery
                  </a>
                </Link>
                            </li>
                            
                        </ul>

                    </div>
                </nav>
            </div>
        </section>
        <section id="content" data-aos="fade-right">
            <div className="container content-div">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 max60">
                        <img src="./Images/8-removebg.png" className="logo-img" />
                        <p className="content-p">
                           Sol Islands is a collection of 1501 individual islands that have risen out of the Solana sea DAO and staking platform SOLD OUT http://linktr.ee/Solislands DAO

                            <br></br>Each island is guaranteed 1/1 so you really can own your very own slice of paradise
                        </p>
                        <a className="explore-btn style2" href="#storyline">Explore More</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="./Images/ezgif.com-gif-maker (1).gif" className="content-gif"/>
                    </div>
                </div>

            </div>
        </section>

        <section id="team" data-aos="fade-left">
            <div className="container">
                <h1 className="team-heading">OUR TEAM</h1>
                <div className="row justify">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="Images/zardoj.jpeg" className="team-img" />
                        <h2 className="team-name">Zardoz</h2>
                    
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="Images/nugget.jpeg" className="team-img" />
                        <h2 className="team-name">Nugget</h2>
                       
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="Images/daffy.jpeg" className="team-img" />
                        <h2 className="team-name">Daffy</h2>
                        
                    </div>
                </div>
            </div>
        </section>

        <section id="storyline" data-aos="fade-right">
            <div className="container story-div">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 max60">
                        <h1 className="story-heading">OUR STORY</h1>
                        <p className="story-p">
                            We are a team of three uk based devs that are interested in utilising the brilliant Solana
                            blockchain to distribute our art for a fair price without the gas fees that are found on ETH
                        </p>
                        <a className="read-more" href="#">Read more..</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="Images/ezgif.com-gif-maker.gif" className="team-gif" />
                    </div>
                </div>
            </div>
        </section>


    </section>

    <section id="part-2">
        <section id="faq" data-aos="fade-left">
            <div className="container">
                <h1 className="roadmap-header">FREQUENTLY ASKED QUESTIONS</h1>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How many are going to be minted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There will be a total of 1501 individual islands.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>When is the mint?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The mint will begin in early January date TBC
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where will the public sale mint link be posted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The mint link will be announced publicly to our discord server.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the mint price?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The mint price will be 0.44 SOL.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Will there be a cap to how many you can mint?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will be able to mint as many times you want, limited to 1 mint per transaction.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Community</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We will be using Twitter Tweets, Twitter DMs, and Twitter Spaces extensively, to promote our project and engage with our community in a much safer and much more personal manner.
Our community can engage us directly via Twitter DM and can also engage one another on Twitter.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is there a roadmap?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can find the full roadmap below.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What secondary markets will you be listed on?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We plan on being listed on Solanart, Magic Eden and Digital eyes.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
        </section>

        <section id="roadmap" data-aos="fade-right">
            <div className="container roadmap-cont">
                <div className="head-roadmap">
                    <h1 className="roadmap-header">Roadmap</h1>
                </div>

                <div className="timeline style3" >
                    <ul>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 1</time><br></br>
                            	Build island community organically via twitter and discord
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 2</time><br></br>
                                	Giveaways and pre sale to be announced via social media outlets
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 3</time><br></br>
                                	Mint Date set for Jan 2022 4444 @ 0.44sol 
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 4</time><br></br>
                                	staking implemented 
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 5</time><br></br>
                                	 $skul token of our own
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 6</time><br></br>
                                	List on secondary immediately following mint including Solanart, Magic Eden and digital eyes
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 7</time><br></br>
                                	staking will create a true passive income for holders
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 8</time><br></br>
                                	Air drop of exclusive NFT to ALL Holders 4 weeks following mint date
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 9</time><br></br>
                                	Pledge to support sol islanders following launch and be there to answer ongoing questions and concerns we will be present and answer all queries and questions promptly
                            </div>
                        </li>
                        <li className="in-view">
                            <div data-aos="fade-right">
                                <time>Phase 10</time><br></br>
                                	Sol islanders automatically whitelisted for future projects
                            </div>
                        </li>

                    </ul>
                    </div>
            </div>

        </section>

        <section id="footer">
            <div className="container footer-div style4">
                <h2 className="footer-header">
                    sol Islands
                </h2>
                <div className="row icon-row justify">
                    <div className="col-md-3 col-lg-3 col-sm-12"></div>
                    <div className="col-md-3 col-sm-12 col-lg-3">
                        <a href="https://discord.gg/3Cvt5AK3NM"><img src="./Images/discord.png" className="social-media style5" /></a>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3">
                        <a href="https://twitter.com/SolIslands1"><img src="./Images/twitter.png" className="social-media style5" /></a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12"></div>
                </div>
                <p className="contact">
                    
                </p>
                <p className="copyright">
                    Copyright © Sol Islands 2021. All rights reserved.
                </p>
            </div>
        </section>
    </section>
                
           
              
             
    
    </div>
  );
};
