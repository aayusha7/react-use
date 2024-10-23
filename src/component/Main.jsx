// import PropTypes from 'prop-types';



    // eslint-disable-next-line react/prop-types
    const Card = ({ name, company, title, category, icon }) => {
        return (
          <div className="card">
            <div className="card-header">
              <i className="fa fa-user"></i> {/* User icon */}
              <span className="card-name">{name}</span>
            </div>
            <div className="card-body">
              <div className="card-company">
                <i className="fa fa-building"></i> {company}
              </div>
              <div className="card-title">
                <i className="fa fa-briefcase"></i> {title}
              </div>
              <div className="card-category">
                <i className={`fa ${icon}`}></i> {category}
              </div>
            </div>
          </div>
        );
      };
      
    const Main = () => {
        const alumniBusinessesClassified = [
            {
              name: 'John Doe',
              company: 'DoeTech Solutions',
              title: 'Software Engineer',
              category: 'Technology',
              icon: 'www.logo1.com'
            },
            {
              name: 'Jane Smith',
              company: 'Smith Marketing',
              title: 'Marketing Lead',
              category: 'Marketing',
              icon: 'www.logo2.com'
            },
            {
              name: 'Mike Brown',
              company: 'Brown Designs',
              title: 'Architect',
              category: 'Architecture',
              icon: 'www.logo3.com'
            },
            {
              name: 'Sarah Wilson',
              company: 'Wilson Consulting',
              title: 'Consultant',
              category: 'Consulting',
              icon: 'www.logo4.com'
            },
            {
              name: 'Robert Davis',
              company: 'Davis Innovations',
              title: 'CEO',
              category: 'Technology',
              icon: 'www.logo5.com'
            },
            {
              name: 'Emily Clark',
              company: 'Clark HR Services',
              title: 'HR Manager',
              category: 'Human Resources',
              icon: 'www.logo6.com'
            },
            {
              name: 'Daniel Lee',
              company: 'Lee Analytics',
              title: 'Data Analyst',
              category: 'Data Analytics',
              icon: 'www.logo7.com'
            },
            {
              name: 'Chloe Martinez',
              company: 'Martinez Web Dev',
              title: 'Web Developer',
              category: 'Web Development',
              icon: 'www.logo8.com'
            },
            {
              name: 'Oliver White',
              company: 'White Finance',
              title: 'Financial Advisor',
              category: 'Finance',
              icon: 'www.logo9.com'
            },
            {
              name: 'Grace Thompson',
              company: 'Thompson Legal',
              title: 'Legal Advisor',
              category: 'Legal Services',
              icon: 'www.logo10.com'
            },
            {
              name: 'Ethan Garcia',
              company: 'Garcia Events',
              title: 'Event Planner',
              category: 'Event Management',
              icon: 'www.logo11.com'
            },
            {
              name: 'Ava Harris',
              company: 'Harris Designs',
              title: 'Graphic Designer',
              category: 'Design',
              icon: 'www.logo12.com'
            },
            {
              name: 'Liam Cooper',
              company: 'Cooper Logistics',
              title: 'Operations Lead',
              category: 'Logistics',
              icon: 'www.logo13.com'
            },
            {
              name: 'Mia Gonzalez',
              company: 'Gonzalez Marketing',
              title: 'Marketing Analyst',
              category: 'Marketing',
              icon: 'www.logo14.com'
            },
            {
              name: 'William Nelson',
              company: 'Nelson Security',
              title: 'Cybersecurity Lead',
              category: 'Cybersecurity',
              icon: 'www.logo15.com'
            },
            {
              name: 'Ella Scott',
              company: 'Scott Interiors',
              title: 'Interior Designer',
              category: 'Design',
              icon: 'www.logo16.com'
            },
            {
              name: 'Jack Adams',
              company: 'Adams Fitness',
              title: 'Fitness Coach',
              category: 'Fitness',
              icon: 'www.logo17.com'
            },
            {
              name: 'Olivia Martinez',
              company: 'Martinez Photos',
              title: 'Photographer',
              category: 'Photography',
              icon: 'www.logo18.com'
            },
            {
              name: 'Lucas Perez',
              company: 'Perez Devs',
              title: 'Software Developer',
              category: 'Technology',
              icon: 'www.logo19.com'
            },
            {
              name: 'Charlotte Roberts',
              company: 'Roberts Events',
              title: 'Event Coordinator',
              category: 'Event Management',
              icon: 'www.logo20.com'
            },
            {
              name: 'Henry Murphy',
              company: 'Murphy Accounting',
              title: 'Accountant',
              category: 'Accounting',
              icon: 'www.logo21.com'
            },
            {
              name: 'Amelia Turner',
              company: 'Turner Law Firm',
              title: 'Lawyer',
              category: 'Legal Services',
              icon: 'www.logo22.com'
            },
            {
              name: 'Benjamin Jenkins',
              company: 'Jenkins Realty',
              title: 'Real Estate Agent',
              category: 'Real Estate',
              icon: 'www.logo23.com'
            },
            {
              name: 'Sophia Bailey',
              company: 'Bailey Consulting',
              title: 'Business Analyst',
              category: 'Consulting',
              icon: 'www.logo24.com'
            },
            {
              name: 'Mason Miller',
              company: 'Miller Media',
              title: 'Videographer',
              category: 'Media',
              icon: 'www.logo25.com'
            },
            {
              name: 'Ella Campbell',
              company: 'Campbell PR',
              title: 'Public Relations',
              category: 'Public Relations',
              icon: 'www.logo26.com'
            },
            {
              name: 'Logan Parker',
              company: 'Parker Sales',
              title: 'Sales Manager',
              category: 'Sales',
              icon: 'www.logo27.com'
            },
            {
              name: 'Lily Sanders',
              company: 'Sanders Media',
              title: 'Social Media Manager',
              category: 'Marketing',
              icon: 'www.logo28.com'
            },
            {
              name: 'James Cox',
              company: 'Cox Consulting',
              title: 'Business Consultant',
              category: 'Consulting',
              icon: 'www.logo29.com'
            },
            {
              name: 'Harper Bell',
              company: 'Bell Fitness',
              title: 'Fitness Trainer',
              category: 'Fitness',
              icon: 'www.logo30.com'
            }
          ];
    
      
        return (
          <div className="card-grid">
            {alumniBusinessesClassified.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                company={card.company}
                title={card.title}
                category={card.category}
                icon={card.icon}
              />
            ))}
          </div>
        );
      };


      export default Main;


 


      
    

