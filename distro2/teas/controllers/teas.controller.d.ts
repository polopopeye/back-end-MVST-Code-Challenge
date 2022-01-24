import { CreateTeaDto, PaginationTeasDTO, UpdateTeaDto } from '../dtos/teas.dtos';
import { TeasService } from '../services/teas.service';
export declare class TeasController {
    private teasService;
    constructor(teasService: TeasService);
    getTeas(params: PaginationTeasDTO): Promise<import("../entities/teas.entity").Tea[]>;
    search(search: string, limit: number, offset: number): Promise<any>;
    getOne(productId: number): Promise<import("../entities/teas.entity").Tea>;
    create(payload: CreateTeaDto): Promise<import("../entities/teas.entity").Tea>;
    update(id: number, payload: UpdateTeaDto): Promise<import("../entities/teas.entity").Tea>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
