
class InMemoryRepository {

    constructor() {
        this.workouts = []
    }

    _isValidId(id) {
        return (id >= 0 || id < this.workouts.length)
    }

    async save(workout, id) {
        if (id === undefined) {
            this.workouts.push(workout)
            console.info("Saved new workout", workout, this.workouts.length)
            return this.workouts.length - 1
        }
        if (!this._isValidId(id)) { throw "Invalid id" }
        console.info("Updating workout %s", id, workout)
        this.workouts[id] = workout
        return id
    }

    async getAll() {
        return this.workouts.map((w, idx) => ({ id: idx, value: w }))
    }
}

async function inMemoryRepository() {
    return new InMemoryRepository()
}

export { inMemoryRepository }