<template>
  <section class="education-main-section">
    <transition name="slide-in">
      <div class="education-header" v-if="visibleHeader">
        <h1>Completed Coursework</h1>
        <p>
          A curated catalog of completed courses that reflect my core strengths in web development,
          systems, and applied mathematics.
        </p>
      </div>
    </transition>
    <transition-group name="fade" tag="div" class="classes-section">
      <div
        v-for="course in visibleCourses"
        :key="course.id"
        class="class-card"
      >
        <h2>{{ course.title }}</h2>
        <h3>{{ course.classNumber }}</h3>
        <p>{{ course.description }}</p>
      </div>
    </transition-group>
  </section>
</template>

<script lang="js">
  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    name: 'Education',
    setup() {
      const allCourses = [
        {id: 1 , title: 'Computing Ethics', classNumber: 'CSCD202', description: 'This course explores the uses of computing technologies from a socio-cultural and ethical perspective, including the impacts of information systems on individuals, organization, and society and future direction in which the forces of technology and computing are tending to move us.'},
        {id: 2 , title: 'Object Oriented Programming', classNumber: 'CSCD212', description: 'This course involves a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning will also be introduced. Programming projects and a group project are required.' },
        {id: 3 , title: 'C++ Programming', classNumber: 'CSCD305', description: 'This course teaches the C++ programming language. Topics include basic syntax, pointers, memory management, classes, inheritance and polymorphism, exception handling, standard template library usage, namespaces, memory management, and graphical user interface (GUI) programming. Programming projects are required.' },
        {id: 4 , title: 'C and Unix Programming', classNumber: 'CSCD240', description: 'This course includes program development tools of the UNIX operating system and syntax and programming techniques of the C language in that environment. UNIX topics include interactive shells, common text editors, utility programs, file system structure, libraries and operating system calls and system programming. C topics include data types, structures, pointers and pointer arithmetic, arrays, linked lists, and function design and use. Programming projects are required.' },
        {id: 5 , title: 'Architecture and Organization', classNumber: 'CSCD260', description: 'This is an introductory course on microprocessor and microcontroller systems organization. It provides low-level programming principles for microcomputer based systems. The course emphasizes assembly and C language programming techniques and laboratory experiments in input/output programming, memory organization, interrupts and interfacing methods.' },
        {id: 6 , title: 'Data Structures', classNumber: 'CSCD300', description: 'This course covers fundamental abstract concepts of data structures as well as their implementation in a programming language. Topics include linked lists, stacks, queues, hashing, recursion, complexity analysis of algorithms, binary search trees and heaps. Programming projects with formal documentation are required.' },
        {id: 7 , title: 'Virtual Reality and Data Visualization', classNumber: 'CSCD477', description: 'This course introduces the concept of virtual reality (VR) using knowledge of computer graphics with hands-on projects and programming assignments. Students use game engines as the implementation platforms for graphics-related programming assignments and projects. With virtual devices, scientific results, visualization, and simulations are explored in unimodal and multimodal virtual environments.' },
        {id: 8 , title: 'Relational Database Systems', classNumber: 'CSCD327', description: 'This course covers the basic concepts in relational database systems, including data manipulation language and data definition language. Relational models are covered in depth together with an overview of SQL, Relational Algebra, Entity-Relationship Model and its role in application development.' },
        {id: 9 , title: 'Secure Coding', classNumber: 'CSCD437', description: 'This course will introduce a variety of topics of concern to programmers when writing code. It will examine characteristics of secure programs and the ability to implement programs that are free from vulnerabilities, including evaluating software, understanding mechanisms for testing software for vulnerabilities, and understanding specific vulnerabilities such as buffer overflow. Java, C and C++ code will be examined. Written assignments and coding assignments are required.' },
        {id: 10, title: 'Operating Systems', classNumber: 'CSCD340', description: 'This course covers major concepts in the design and modeling of operating systems for digital computers. Topics include historical development of operating systems; methods used in simulations, memory management, system protection mechanisms, I/O management, CPU scheduling, process management and file systems. Programming assignments, program analyses and written reports are required.' },
        {id: 11, title: 'Software Development Principles', classNumber: 'CSCD350', description: 'This course covers formal approaches and tools for conceiving, understanding, analyzing, designing,building, testing, deploying, documenting and maintaining large software systems. Topics may include software lifecycle models; project and team management; verification and validation techniques; legal and ethical issues; practical development and application of skills in critical thinking, communication and professionalism. A major team-based software development project is required.' },
        {id: 12, title: 'Compilers', classNumber: 'CSCD420', description: 'This course explores Automata Theory, Regular Expressions, the Backus-Naur metalanguage for specifying programming language syntax, and Interpreter and Compiler Design. Programming projects are required' },
        {id: 13, title: 'Digital Circuits', classNumber: 'EENG160', description: 'This course covers the fundamentals of digital computer design including appropriate number systems, boolean algebra, and basic digital circuits. Methods introduced will include the use of Karnaugh Maps and the Quine-Mckluskey procedure. Computer laboratory work will involve the use of current software for the design, analysis, and simulation of digital circuits.' },
        {id: 14, title: 'Calculus I', classNumber: 'MATH161', description: 'This course introduces the concepts of mathematical limits, derivatives, definite and indefinite integrals, and of real-valued functions of a single real variable, with applications.' },
        {id: 15, title: 'Calculus II', classNumber: 'MATH162', description: 'This course presents techniques of integration and improper integrals, with applications, and introduces transcendental functions.' },
        {id: 16, title: 'Linear Algebra', classNumber: 'MATH231', description: 'This course covers the theory and practice of vector geometry in R2 and R3, systems of linear equations, matrix algebra, determinants, vector spaces, bases and dimension, linear transformations, eigenvalues and eigenvectors, rank and nullity and applications.' },
        {id: 17, title: 'Discrete Mathmatics', classNumber: 'MATH301', description: 'This course covers the theory and application of the mathematics most relevant to computer science. Foundation topics include logic, induction and recursion, methods of proof, set theory, relations and functions, and combinatorics. Implementation topics include graphs and matrices, including systems of linear equations, two dimensional rotation matrices and matrix representations of graphs, as well as selected topics in graph theory.' },
        {id: 18, title: 'Elementary Probability and Statistics', classNumber: 'MATH380', description: 'This course covers empirical and theoretical frequency distributions. Discrete and continuous random variables. The binomial random variable and the normal. Descriptive statistics including measures of location, spread and association. An introduction to inferential statistics including confidence intervals and hypothesis testing.' },
        {id: 19, title: 'Computer Networks', classNumber: 'CSCD330', description: 'This course covers fundamental concepts, protocol mechanisms and programming skills for computer networks. It includes a technical overview of telecommunication media and fundamental protocols for the Internet such as ISO/OSI layers, Ethernet, collision detection and channel allocation. Programming projects are required.' },
        {id: 20, title: 'Programming Principles I', classNumber: 'CSCD210', description: 'This course covers the concepts and practices of information representation, computer algorithms, hardware organization and computer program design and implementation. Students write, run, debug, analyze and evaluate computer programs. Topics include primitive data types, number systems, file I/O classes, control structures, method design and usage, array–sorting and searching algorithms. Programming projects are required.' },
        {id: 21, title: 'Programming Principles II', classNumber: 'CSCD211', description: 'This course continues coverage of concepts introduced in Programming Principles I. Topics include composition, recursion, data abstraction, polymorphism, inheritance, interfaces, inner classes, abstract classes, object cloning, array lists, linked lists, and exception handling. Programming projects are required.' },
        {id: 22, title: 'Web Application Development', classNumber: 'CSCD378', description: 'This course examines the fundamental principles and techniques associated with the development of multi-tier web applications. Topics include web standards, portability, and usability. Programming projects are required.' },
        {id: 23, title: 'Data Mining', classNumber: 'CSCD429', description: 'This course will provide an introduction to the main topics in data mining and knowledge discovery, including: data preparation for knowledge discovery, frequent pattern and association mining, classification and cluster analysis.' },
      ];

      const visibleHeader = ref(false);
      const visibleCourses = ref([]);
      const delay = 200; // milliseconds between each card

      onMounted(() => {
        visibleHeader.value = true;
        allCourses.forEach((course, index) => {
          setTimeout(() => {
            visibleCourses.value.push(course);
          }, index * delay);
        });
      });

      return {
        visibleHeader,
        visibleCourses
      };
    }
  });
  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.education-main-section {
  font-family: 'Inter', sans-serif;
  background: var(--main-background-dark);
  padding: 4rem 5%;
  overflow-x: hidden;
}

.education-header {
  max-width: 900px;
  margin: 6rem 2rem;
  text-align: center;
}

.education-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--heading-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.education-header p {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* GRID LAYOUT */
.classes-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  padding: 2rem;
}

/* COURSE CARD */
.class-card {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--box-shadow-default);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  min-height: 580px;
}

.class-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.class-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 0.5rem;
}

.class-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.class-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark-on-light);
}

/* ANIMATION */
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}


/* RESPONSIVE */
@media (max-width: 768px) {
  .education-header h1 {
    font-size: 2.75rem;
  }

  .education-header p {
    font-size: 1.1rem;
  }

  .education-main-section {
    padding: 0rem;
  }

  .classes-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
    overflow-y: hidden;
  }

  .class-card {
    padding: 1rem;
    min-height: auto;
  }

  .class-card h2 {
    font-size: 1.25rem;
  }

  .class-card h3 {
    font-size: 0.95rem;
  }

  .class-card p {
    font-size: 0.84rem;
  }
}
</style>