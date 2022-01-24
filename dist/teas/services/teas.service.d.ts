import { CreateTeaDto, PaginationTeasDTO, UpdateTeaDto } from '../dtos/teas.dtos';
import { Tea } from '../entities/teas.entity';
import { Repository } from 'typeorm';
export declare class TeasService {
    private teaRepository;
    constructor(teaRepository: Repository<Tea>);
    findAll(params?: PaginationTeasDTO): Promise<Tea[]>;
    search(searchString: string, limit?: number, offset?: number): Promise<any>;
    findOne(id: number): Promise<Tea>;
    create(data: CreateTeaDto): Promise<Tea>;
    update(id: number, changes: UpdateTeaDto): Promise<Tea>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
