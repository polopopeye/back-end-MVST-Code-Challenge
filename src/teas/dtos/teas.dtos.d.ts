export declare class CreateTeaDto {
    readonly title: string;
    readonly description: string;
    readonly image: string;
}
declare const UpdateTeaDto_base: import("@nestjs/common").Type<Partial<CreateTeaDto>>;
export declare class UpdateTeaDto extends UpdateTeaDto_base {
}
export declare class PaginationTeasDTO {
    limit: number;
    offset: number;
}
export {};
