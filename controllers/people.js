const people = require('../people.json');

exports.index = (_, res) => {
    res.status(200).json([
        {
            path: '/people',
            description: 'Returns an array of 4 people object'
        },
        {
            path: '/people/:id',
            description: 'Returns the person with specified id'
        }
    ]);
};

exports.show = async (_, res, next) => {

    try{  
        res.status(200).json(people);
    }catch (error){
        next(error);
    }
};

exports.findId = async (req, res, next) => {
    try {
        const path = `${people}/${id}`

        const { person: [person] } = get(path);
        person.thumbnail = this.thumbnail(person.thumbnail)(req.params.id);
        res.status(200).json(person);
    }catch (error){
        next(error);
    }
}