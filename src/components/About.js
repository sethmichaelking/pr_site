import React from 'react'
import Nav from './Nav'
import propic from '../components/propic.png'
import signature from '../components/signature.png'
import Footer from './Footer'
function About() {
  return (
    <div>
        <Nav/>
        <div class='mt-4'>
            <section class="bg-white dark:bg-gray-900">
            <div class='mx-auto max-w-5xl px-4 sm:px-6'>
                <div class="mx-auto mb-20 max-w-screen-sm">
                    <h1 class="font-orbiter mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unlocking brand oppurtunities</h1>
                    <p class="font-lighttext-xl text-gray-600 dark:text-gray-400">At PulsePR, our mission is bridge the gap between journalists and experts and bring awareness to your brand. </p>
                </div> 
                <div>
                    <h2 
                    style={{
                        textAlign: 'initial'
                }}
                    class='text-2xl mb-4 font-medium'> A Note From Our Founder</h2>
                </div>
                <div class='flex'>
                    <div style={{
                            textAlign: 'initial'
                    }}>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}>Hi, I'm Seth, the Founder of PulsePR.</p>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}>My journey as a journalist and writer began in the Spring of 2018 when an editor at Complex News reached out about providing expert analysis on a podcast series. </p>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}>Since then, I've contributed to Rolling Stone, The Jerusalem Post, OneZero and other publications. I've also been syndicated in LinkedIn, Yahoo News, and dozens of others. </p>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}>All of these publication credits happened in the span of a few years.</p>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}>I credited my success to not only knowing how to pitch and identify a captivating story that editors want to publish, but also in taking advantage of HARO, a site which lets publicists pitch their clients to journalists for upcoming stories.
                        </p>
                        <p 
                        class='mb-2'
                        style={{
                            width: '80%'
                        }}> If your brand needs a jumpstart, let us handle the process of pitching journalists on your story so you stand out from the crowd. 
                        </p>
                        <p 
                        style={{
                            width: '80%',
                            marginBottom: '12px'
                        }}> We comb HARO to discover new oppurtunities, and leverage our meaningful relationships with editors, journalsists, and influencers across the media industry to ensure your the go-to source for comment on new stories.</p>
                        <p> Cheers,</p>
                        <img 
                        class='grow self-start'
                        style={{
                            height: '5%'
                        }} src={signature}/>
                    </div>
                    <div>
                        <img src={propic}/>
                        <p class='font-medium'> Seth King</p>
                        <p class='font-extralight'> Founder of PulsePR</p>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    </div>
  )
}

export default About