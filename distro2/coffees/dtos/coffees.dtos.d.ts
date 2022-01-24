export declare class CreateCoffeeDto {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly categoryId: number;
}
declare const UpdateCoffeeDto_base: import("@nestjs/common").Type<Partial<CreateCoffeeDto>>;
export declare class UpdateCoffeeDto extends UpdateCoffeeDto_base {
}
export declare class PaginationCoffeesDTO {
    limit: number;
    offset: number;
}
export {};
