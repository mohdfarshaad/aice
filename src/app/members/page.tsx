import { Mail, Github, Linkedin, MapPin, Award } from "lucide-react";

export default function Members() {
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      email: "sarah.johnson@email.com",
      github: "sarahjdev",
      linkedin: "sarah-johnson-dev",
      specialties: ["React", "Node.js", "AWS"],
      memberSince: "2022",
      achievements: ["Hackathon Winner 2024", "Outstanding Contributor"],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "AI/ML Engineer",
      company: "DataScience Pro",
      location: "Seattle, WA",
      email: "michael.chen@email.com",
      github: "mchen-ai",
      linkedin: "michael-chen-ai",
      specialties: ["Python", "TensorFlow", "Computer Vision"],
      memberSince: "2021",
      achievements: ["AI Innovation Award", "Research Publication"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      email: "emily.rodriguez@email.com",
      github: "erodriguez-ops",
      linkedin: "emily-rodriguez-devops",
      specialties: ["Docker", "Kubernetes", "CI/CD"],
      memberSince: "2023",
      achievements: ["Best Newcomer 2023"],
    },
    {
      id: 4,
      name: "David Kim",
      title: "Mobile App Developer",
      company: "AppInnovate",
      location: "New York, NY",
      email: "david.kim@email.com",
      github: "dkim-mobile",
      linkedin: "david-kim-mobile",
      specialties: ["React Native", "Flutter", "iOS"],
      memberSince: "2020",
      achievements: ["Mobile Excellence Award", "Community Leader"],
    },
    // {
    //   id: 5,
    //   name: "Jessica Brown",
    //   title: "Cybersecurity Specialist",
    //   company: "SecureNet Corp",
    //   location: "Washington, DC",
    //   email: "jessica.brown@email.com",
    //   github: "jbrown-security",
    //   linkedin: "jessica-brown-security",
    //   specialties: ["Penetration Testing", "Network Security", "Blockchain"],
    //   memberSince: "2022",
    //   achievements: ["Security Champion 2024"],
    // },
    // {
    //   id: 6,
    //   name: "Alex Thompson",
    //   title: "Data Scientist",
    //   company: "Analytics Plus",
    //   location: "Boston, MA",
    //   email: "alex.thompson@email.com",
    //   github: "athompson-data",
    //   linkedin: "alex-thompson-data",
    //   specialties: ["R", "Python", "Machine Learning"],
    //   memberSince: "2021",
    //   achievements: ["Data Innovation Award"],
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Members</h1>
          <p className="text-xl text-blue-100">
            Meet the talented engineers who make up our innovative community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Total Members</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">25</div>
            <div className="text-gray-600">Specialties</div>
          </div>
        </div> */}

        <h2 className="flex text-3xl mb-3 justify-center ">Team</h2>

        <hr className="mb-3 text-gray-400" />

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.company}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{member.location}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Member since:</span>{" "}
                    {member.memberSince}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Award size={14} className="text-yellow-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={`https://github.com/${member.github}`}
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex text-3xl mb-3 justify-center mt-5">Team 2</h2>

        <hr className="mb-3 text-gray-400" />

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.company}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{member.location}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Member since:</span>{" "}
                    {member.memberSince}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Award size={14} className="text-yellow-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={`https://github.com/${member.github}`}
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        {/* <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Want to Join Our Community?
            </h2>
            <p className="text-blue-100 mb-6">
              Connect with innovative engineers, share knowledge, and grow your
              career with AICE
            </p>
            <a
              href="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Become a Member
            </a>
          </div> 
      </div> */}
      </div>
    </div>
  );
}
