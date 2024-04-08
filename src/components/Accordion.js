import React from 'react'

import { Accordion } from "flowbite-react";

export function AccordionFx() {
  return (
    <div id='FAQ'class="py-8 px-4 mx-auto max-w-screen-xl">
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Can I review the content before its published?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The truth is - sometimes. Most journalists will not share their work with you ahead of time. But some will be open to reading the quotes they choose over the phone. However, this isn't something we can gaurentee. Jouranlists have no obligation to do so. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How long does it take for an article to go live?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Newsrooms are unpredictable places. We have former journalists here that will tell you they've followed up with editors numerous times in order to get their articles published. Some articles also get "killed", which is when an article is cancelled entirely. We've all been there. 

            Depending on the article your contributing too, expect anywhere from 2-4 months. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Do you work with all industries?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            While some agencies are averse to certain industries - such as gambling, adult content, or pharmaceuticals - we don't avoid them. 

            Journalists often prefer to link out to pages that are informational or heplful in order to provide their readers with more context. If your concerned your site doesn't have any content worth linking out too, let's tak about our team building content out for you before we reach out to journalits and editors at publications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    
    </div>
  );
}
