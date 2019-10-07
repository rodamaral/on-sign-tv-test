export function roundCoordinate(text) {
    let parsed = parseFloat(text, 10)
    if (isNaN(parsed)) {
        parsed = 0
    }

    return `${Math.round(parsed * 1000) / 1000}`
}
