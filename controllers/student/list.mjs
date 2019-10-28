import studentDAO from '../../models/student/dao.mjs';

const list = async (req, res,next) => {

    try {

        console.time('list')
        const students = await studentDAO.list();
        console.timeEnd('list');
        //Ejercicio 22: Contar alumnos o proyectos; 
        //si el parámetro count es true envía núm de estudiantes sino el array de estudiantes.      
        if (req.query['count'] == 'true') {

            if (req.query['projects'] == 'true') {

                const projectsCount = students.map(doc => doc.projects.length)
                        .reduce((a, c) => a + c || 0, 0);
                students.push({ projects_number: projectsCount });
            }
            
            if (req.query['student'] == 'true') {

                const students_number = students.length-1;
                students.push({ students_number: students_number });
            }    
                    
            
        }

            res.json(students);
        
        } catch (error) {

            next(error);
        }
    }

export default list;