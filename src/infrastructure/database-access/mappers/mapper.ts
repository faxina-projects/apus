abstract class Mapper<DTO, Entity> {
  abstract toDTO: (entity: Entity) => DTO;
}

export { Mapper };
