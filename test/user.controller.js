const { expect } = require('chai')
const users = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })
  })

   describe('Get', ()=> {
  //   // TODO Create test for the get method
     it('get a user by username', (done) => {
  //     // 1. Create a user
  
    const user = {
      username: 'kermar',
      firstname: 'marion',
      lastname: 'kerdine'
    }
    users.create(user, (err, result) => {
      expect(err).to.be.equal(null)
      expect(result).to.be.equal('OK')
      done()
    })
  
  //     // 2. Check the result of the get method is correct
  //     done()
user.get('kermar', (err,result) =>{
expect(result.username).to.be.equal('kermar')
expect(result.firstname).to.be.equal('marion')
expect(result.lastname).to.be.equal('kerdine')
done()
        })

     })
   })
})
