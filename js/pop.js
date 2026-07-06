function openSyllabus(course) {

    const modal = document.getElementById("popupModal");
    const title = document.getElementById("popupTitle");
    const body = document.getElementById("popupBody");

    // =========================
    // DATA ANALYTICS
    // =========================
    if (course === "analytics") {

        title.innerHTML = "Data Analytics Syllabus";

        body.innerHTML = `
        <div class="popup-scroll">

            <h3>Module 1 : Data Analytics Fundamentals</h3>
            <ul>
                <li>Introduction to Data Analytics</li>
                <li>Types of Data</li>
                <li>Data Analytics Process</li>
                <li>Types of Analytics</li>
                <li>Business Intelligence (BI)</li>
                <li>Role of Data Analyst</li>
            </ul>

            <h3>Module 2 : Microsoft Excel</h3>
            <ul>
                <li>Excel Basics</li>
                <li>Data Cleaning</li>
                <li>Formulas and Functions</li>
                <li>Charts</li>
                <li>Pivot Tables</li>
                <li>Dashboards</li>
            </ul>

            <h3>Module 3 : SQL</h3>
            <ul>
                <li>Database Fundamentals</li>
                <li>SQL Commands</li>
                <li>SELECT Queries</li>
                <li>Filtering and Sorting</li>
                <li>Aggregate Functions</li>
                <li>GROUP BY & HAVING</li>
                <li>Joins</li>
                <li>Subqueries</li>
                <li>Views</li>
                <li>Window Functions</li>
            </ul>

            <h3>Module 4 : Statistics</h3>
            <ul>
                <li>Descriptive Statistics</li>
                <li>Probability</li>
                <li>Data Distribution</li>
                <li>Correlation</li>
                <li>Regression</li>
                <li>Hypothesis Testing</li>
            </ul>

            <h3>Module 5 : Python</h3>
            <ul>
                <li>Python Basics</li>
                <li>Data Types</li>
                <li>Control Statements</li>
                <li>Functions</li>
                <li>File Handling</li>
                <li>Object-Oriented Programming</li>
            </ul>

            <h3>Module 6 : NumPy & Pandas</h3>
            <ul>
                <li>NumPy Arrays</li>
                <li>Pandas DataFrames</li>
                <li>Data Cleaning</li>
                <li>Data Manipulation</li>
                <li>Data Analysis</li>
            </ul>

            <h3>Module 7 : Data Visualization</h3>
            <ul>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Charts and Graphs</li>
                <li>Dashboard Design</li>
            </ul>

            <h3>Module 8 : Exploratory Data Analysis</h3>
            <ul>
                <li>Data Cleaning</li>
                <li>Missing Values</li>
                <li>Outlier Detection</li>
                <li>Feature Analysis</li>
                <li>Business Insights</li>
            </ul>

            <h3>Module 9 : Power BI</h3>
            <ul>
                <li>Power BI Desktop</li>
                <li>Power Query</li>
                <li>Data Modeling</li>
                <li>DAX</li>
                <li>Visualizations</li>
                <li>Dashboards</li>
            </ul>

            <h3>Module 10 : Projects & Interview Preparation</h3>
            <ul>
                <li>Real World Projects</li>
                <li>Resume Building</li>
                <li>Portfolio Development</li>
            </ul>

        </div>`;
    }

    else if(course==="datascience"){

    title.innerHTML="Data Science Syllabus";

    body.innerHTML=`
    <div class="popup-scroll">

    <h3>Module 1 : Data Science Fundamentals</h3>
    <ul>
    <li>Introduction to Data Science</li>
    <li>Data Science Lifecycle</li>
    <li>Types of Data</li>
    <li>Data Collection</li>
    <li>Business Understanding</li>
    </ul>

    <h3>Module 2 : Microsoft Excel</h3>
    <ul>
    <li>Excel Basics</li>
    <li>Data Cleaning</li>
    <li>Formulas and Functions</li>
    <li>Charts</li>
    <li>Pivot Tables</li>
    <li>Dashboards</li>
    </ul>

    <h3>Module 3 : Python Programming</h3>
    <ul>
    <li>Python Basics</li>
    <li>Data Types</li>
    <li>Operators</li>
    <li>Control Statements</li>
    <li>Functions</li>
    <li>File Handling</li>
    <li>Object-Oriented Programming</li>
    </ul>

    <h3>Module 4 : Mathematics for Data Science</h3>
    <ul>
    <li>Linear Algebra</li>
    <li>Probability</li>
    <li>Statistics</li>
    <li>Calculus Basics</li>
    <li>Optimization</li>
    </ul>

    <h3>Module 5 : NumPy & Pandas</h3>
    <ul>
    <li>NumPy Arrays</li>
    <li>Pandas DataFrames</li>
    <li>Data Cleaning</li>
    <li>Data Manipulation</li>
    <li>Feature Engineering</li>
    </ul>

    <h3>Module 6 : Data Visualization</h3>
    <ul>
    <li>Matplotlib</li>
    <li>Seaborn</li>
    <li>Interactive Visualizations</li>
    </ul>

    <h3>Module 7 : Exploratory Data Analysis</h3>
    <ul>
    <li>Data Cleaning</li>
    <li>Missing Values</li>
    <li>Outlier Detection</li>
    <li>Correlation Analysis</li>
    <li>Feature Analysis</li>
    </ul>

    <h3>Module 8 : SQL for Data Science</h3>
    <ul>
    <li>Database Fundamentals</li>
    <li>SQL Queries</li>
    <li>Joins</li>
    <li>Aggregate Functions</li>
    <li>Subqueries</li>
    <li>Window Functions</li>
    </ul>

    <h3>Module 9 : Machine Learning</h3>
    <ul>
    <li>Machine Learning Fundamentals</li>
    <li>Supervised Learning</li>
    <li>Unsupervised Learning</li>
    <li>Regression</li>
    <li>Classification</li>
    <li>Clustering</li>
    <li>Model Evaluation</li>
    </ul>

    <h3>Module 10 : Basic Deep Learning</h3>
    <ul>
    <li>Neural Networks</li>
    <li>TensorFlow</li>
    <li>Keras</li>
    </ul>

    </div>`;
    }

    else if(course==="python"){

    title.innerHTML="Python Development Syllabus";

    body.innerHTML=`
    <div class="popup-scroll">

    <h3>Module 1 : Python Fundamentals</h3>
    <ul>
    <li>Introduction to Python</li>
    <li>Installation & IDE Setup</li>
    <li>Variables and Data Types</li>
    <li>Operators</li>
    <li>Input & Output</li>
    <li>Type Casting</li>
    </ul>

    <h3>Module 2 : Control Statements</h3>
    <ul>
    <li>Conditional Statements</li>
    <li>Loops</li>
    <li>Loop Control Statements</li>
    <li>Pattern Programs</li>
    </ul>

    <h3>Module 3 : Functions</h3>
    <ul>
    <li>User Defined Functions</li>
    <li>Function Arguments</li>
    <li>Lambda Functions</li>
    <li>Recursion</li>
    <li>Scope of Variables</li>
    </ul>

    <h3>Module 4 : Data Structures</h3>
    <ul>
    <li>Lists</li>
    <li>Tuples</li>
    <li>Sets</li>
    <li>Dictionaries</li>
    <li>String Manipulation</li>
    </ul>

    <h3>Module 5 : File Handling & Exception Handling</h3>
    <ul>
    <li>Reading and Writing Files</li>
    <li>File Operations</li>
    <li>Exception Handling</li>
    <li>Custom Exceptions</li>
    </ul>

    <h3>Module 6 : Object-Oriented Programming</h3>
    <ul>
    <li>Classes and Objects</li>
    <li>Constructors</li>
    <li>Inheritance</li>
    <li>Polymorphism</li>
    <li>Encapsulation</li>
    <li>Abstraction</li>
    </ul>

    <h3>Module 7 : Modules & Packages</h3>
    <ul>
    <li>Built-in Modules</li>
    <li>Creating Modules</li>
    <li>Packages</li>
    <li>Virtual Environments</li>
    <li>pip Package Manager</li>
    </ul>

    <h3>Module 8 : Database Programming</h3>
    <ul>
    <li>SQL Basics</li>
    <li>SQL Server</li>
    <li>MySQL Integration</li>
    <li>Database Connectivity</li>
    </ul>

    <h3>Module 9 : Web Development with Flask</h3>
    <ul>
    <li>Flask Installation</li>
    <li>Routing</li>
    <li>Templates (Jinja2)</li>
    <li>Forms</li>
    <li>Database Integration</li>
    </ul>

    <h3>Module 10 : Deployment</h3>
    <ul>
    <li>Hosting Flask Applications</li>
    <li>Environment Variables</li>
    <li>Deployment Basics</li>
    <li>Production Setup</li>
    </ul>

    <h3>Module 11 : Projects</h3>
    <ul>
    <li>Console Based Applications</li>
    <li>Flask Web Applications</li>
    <li>Authentication System</li>
    </ul>

    </div>`;
    }

    else if(course==="android"){

    title.innerHTML="Android & iOS Development Syllabus";

    body.innerHTML=`
    <div class="popup-scroll">

    <h3>Position</h3>
    <p>Android & iOS Application Developer</p>

    <h3>Objective</h3>
    <p>
    Design, develop, test and maintain mobile applications
    using Java, Android Studio, SQLite and Firebase.
    </p>

    <h3>Key Skills</h3>
    <ul>
    <li>Java Programming & OOP</li>
    <li>Android Studio</li>
    <li>SQLite Database</li>
    <li>Firebase Integration</li>
    <li>API Integration</li>
    <li>RecyclerView & CardView</li>
    <li>Firebase Authentication</li>
    <li>Cloud Firestore</li>
    <li>Firebase Storage</li>
    <li>Git & Debugging</li>
    </ul>

    <h3>Module 1 : Fundamentals of Computers & Programming</h3>
    <ul>
    <li>Computer Basics</li>
    <li>Programming Concepts</li>
    <li>Android Studio Installation</li>
    <li>IDE Familiarization</li>
    </ul>

    <h3>Module 2 : Core Java</h3>
    <ul>
    <li>Variables & Operators</li>
    <li>Conditional Statements</li>
    <li>Loops</li>
    <li>Arrays</li>
    <li>Strings</li>
    <li>Classes & Objects</li>
    <li>Inheritance</li>
    <li>Polymorphism</li>
    <li>Interfaces</li>
    <li>Exception Handling</li>
    </ul>

    <h3>Module 3 : Android Basics</h3>
    <ul>
    <li>Android Architecture</li>
    <li>Project Structure</li>
    <li>Application Lifecycle</li>
    <li>Layouts & Views</li>
    <li>Widgets</li>
    </ul>

    <h3>Module 4 : Event Handling & UI</h3>
    <ul>
    <li>Event Listeners</li>
    <li>Registration Forms</li>
    <li>Form Validation</li>
    <li>Dialogs</li>
    <li>RecyclerView</li>
    <li>Toolbar</li>
    <li>Fragments</li>
    <li>Navigation Drawer</li>
    </ul>

    <h3>Module 5 : Data Storage</h3>
    <ul>
    <li>Shared Preferences</li>
    <li>SQLite CRUD</li>
    <li>Passing Data</li>
    <li>Registration System</li>
    </ul>

    <h3>Module 6 : Firebase</h3>
    <ul>
    <li>Firebase Setup</li>
    <li>Authentication</li>
    <li>Realtime Database</li>
    <li>Cloud Firestore</li>
    <li>Firebase Storage</li>
    <li>Push Notifications</li>
    </ul>

    <h3>Module 7 : Advanced Android</h3>
    <ul>
    <li>Location Services</li>
    <li>Broadcast Receivers</li>
    <li>SMS Applications</li>
    <li>Retrofit APIs</li>
    </ul>

    <h3>Module 8 : Project Work</h3>
    <ul>
    <li>Registration System</li>
    <li>Bulk SMS Application</li>
    <li>Location Tracking Application</li>
    </ul>

    </div>`;
    }

    // OPEN POPUP
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// ======================
// CLOSE POPUP
// ======================

function closeModal() {

    const modal =
    document.getElementById("popupModal");

    modal.style.display = "none";

    // enable page scrolling again
    document.body.style.overflow = "auto";
}

