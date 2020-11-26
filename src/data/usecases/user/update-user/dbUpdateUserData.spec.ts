import { IUpdateUser } from "@/domain/usecases/user/updateUser.interface"
import { DbUpdateUser } from "./dbUpdateUser.data";

let updateUserData: IUpdateUser

describe('UpdateUser Data', () => {
  beforeEach(() => {
    updateUserData = new DbUpdateUser()
  })

  it('should be defined', () => {
    expect(updateUserData).toBeDefined()
  })

});
