import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  DeleteResult,
  FindConditions,
  FindManyOptions,
  Repository,
  UpdateResult,
} from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async user(where: FindConditions<User>): Promise<User | null> {
    return this.usersRepository.findOne({ where });
  }

  async users(params: { where?: FindManyOptions<User> }): Promise<User[]> {
    const { where } = params;
    return this.usersRepository.find({ where });
  }

  async createUser(data: Partial<User>): Promise<User> {
    return this.usersRepository.create(data);
  }

  async updateUser(params: {
    where: FindConditions<User>;
    data: Partial<User>;
  }): Promise<UpdateResult> {
    const { where, data } = params;
    return this.usersRepository.update(where, data);
  }

  async deleteUser(where: FindConditions<User>): Promise<DeleteResult> {
    return this.usersRepository.delete(where);
  }
}
