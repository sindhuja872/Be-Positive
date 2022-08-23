import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const FAQ = () => {
  return (
    <div className="faqBlock">
        <div className="container-fluid">
        <h4 className='heading'>FAQ's</h4>
        <Collapse defaultActiveKey={['1']}>
            <Panel header="Why should people donate blood?" key="1">
                <p>Safe blood saves lives.
                    Blood is needed by women with complications during pregnancy and childbirth,
                    children with severe anaemia, often resulting from malaria or malnutrition,
                    accident victims and surgical and cancer patients.
                    There is a constant need for a regular supply of blood because it can be
                     stored only for a limited period of time before use.
                     Regular blood donation by a sufficient number of healthy people is needed
                      to ensure that blood will always be available whenever and wherever it is needed.
                    Blood is the most precious gift that anyone can give to another person 
                    – the gift of life. A decision to donate your blood can save a life, 
                    or even several if your blood is separated into its components – red cells, 
                    platelets and plasma – which can be used individually for patients with specific conditions.</p>
            </Panel>
            <Panel header="Is giving blood safe?" key="2">
                <p>Yes. Remember that you will only be accepted as a blood donor if you are fit and well.
                    Your health and well-being are very important to the blood service.
                    The needle and blood bag used to collect blood come in a sterile pack that cannot be reused,
                     so the process is made as safe as possible.</p>
            </Panel>
            <Panel header="Does it hurt?" key="3">
                <p>Just squeeze the inside of your elbow tightly and you will get a quick idea of what the needle feels like.
                    All you should feel is a gentle pressure and a momentary “pinprick” sensation.
                    Blood donation is very safe and discomfort or problem during or after donating is very uncommon.</p>
            </Panel>
            <Panel header="Can I give blood after vaccination against SARS-CoV-2?" key="4">
                <p>Consistent with current general global practice, recipients of SARS-CoV-2 vaccines that 
                    do not contain live virus may donate blood if they feel well.
                    As SARS-CoV-2 vaccines have been developed only recently,  
                    in settings where deferrals would not compromise blood supply availability, 
                    the National Blood Transfusion Service may consider implementing a precautionary deferral period 
                    of up to seven days  to minimize the impact of call-backs from donors who develop symptoms 
                    subsequent to donating soon after vaccination.Recipients of live virus vaccines 
                    (e.g., virus vector based or live-attenuated virus vaccines) should be deferred for four weeks, 
                    consistent with current practices.</p>
            </Panel>
            <Panel header="Who can give blood, and how often?" key="5">
                <p>The criteria for donor selection varies from country to country, but blood can be donated by most 
                    people who are healthy and do not have an infection that can be transmitted through their blood.
                    The age at which people are eligible to give blood varies, but is commonly between the ages of 17 and 65. 
                    Some countries accept donations from people from the age of 16 and extend the upper age limit beyond 65 years.
                    Healthy adults can give blood regularly – at least twice a year.
                     Your local blood service can tell you how frequently you can give blood.</p>
            </Panel>
        </Collapse>
        </div>
    </div>
  )
}

export default FAQ;