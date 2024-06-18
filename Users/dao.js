//data access object (DAO) design pattern
import model from "./model.js"

export const createUser = (user) => {
  delete user._id
  return model.create(user)
}
export const findAllUsers = () => model.find()
export const findUserById = (userId)=> model.findById(userId) // this is mongoose rule
export const findUserByUsername = (username)=> model.findOne({username:username})
export const findUserByCredentials = (username, password)=>model.findOne({username,password})
export const findUsersByRole = (role)=> model.find({role:role})
//export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user })
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });

export const deleteUser=(userId)=>model.deleteOne({_id:userId})

export const findUsersByPartialName = (partialName)=> {
	const regex = new RegExp(partialName, "i") //i: case-insensitive 
	return model.find({$or:[{firstName:{$regex:regex}}, {lastName:{$regex:regex}}]})
}

/* when you give http://localhost:4000/api/users/123 it will crash
/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schema/objectId.js:250
    throw new CastError('ObjectId', value, this.path, error, this);
          ^

CastError: Cast to ObjectId failed for value "123" (type string) at path "_id" for model "UserModel"
    at SchemaObjectId.cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schema/objectId.js:250:11)
    at SchemaType.applySetters (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schemaType.js:1236:12)
    at SchemaType.castForQuery (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schemaType.js:1653:17)
    at cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/cast.js:375:32)
    at Query.cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:4798:12)
    at Query._castConditions (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:2206:10)
    at model.Query._findOne (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:2526:8)
    at model.Query.exec (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:4342:80)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async findUserById (file:///Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/Users/routes.js:26:20) {
  stringValue: '"123"',
  messageFormat: undefined,
  kind: 'ObjectId',
  value: '123',
  path: '_id',
  reason: BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
      at new ObjectId (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/bson/lib/bson.cjs:2361:23)
      at castObjectId (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/cast/objectid.js:25:12)
      at SchemaObjectId.cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schema/objectId.js:248:12)
      at SchemaType.applySetters (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schemaType.js:1236:12)
      at SchemaType.castForQuery (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/schemaType.js:1653:17)
      at cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/cast.js:375:32)
      at Query.cast (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:4798:12)
      at Query._castConditions (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:2206:10)
      at model.Query._findOne (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:2526:8)
      at model.Query.exec (/Users/imac/Documents/Kellen_Documents/Wyzant/Students/Adi_S_MA/Semester_E/My_git/kanbas-node-server-app/node_modules/mongoose/lib/query.js:4342:80),
  valueType: 'string'
}

Node.js v20.12.2

http://localhost:4000/api/users/666f7817c11886f8745f587e works 
*/