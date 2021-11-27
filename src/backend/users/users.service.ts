import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  DeleteResult,
  FindConditions,
  FindManyOptions,
  Repository,
  UpdateResult,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async user(where: FindConditions<UserEntity>): Promise<UserEntity | null> {
    return this.usersRepository.findOne({ where });
  }

  async users(params: {
    where?: FindManyOptions<UserEntity>;
  }): Promise<UserEntity[]> {
    const { where } = params;
    return this.usersRepository.find({ where });
  }

  async createUser(data: Partial<UserEntity>): Promise<UserEntity> {
    return this.usersRepository.create(data);
  }

  async updateUser(params: {
    where: FindConditions<UserEntity>;
    data: Partial<UserEntity>;
  }): Promise<UpdateResult> {
    const { where, data } = params;
    return this.usersRepository.update(where, data);
  }

  async deleteUser(where: FindConditions<UserEntity>): Promise<DeleteResult> {
    return this.usersRepository.delete(where);
  }
}
