import Vision
import Foundation
import AppKit

let args = CommandLine.arguments
guard args.count > 1 else { exit(0) }

for path in args.dropFirst() {
    let url = URL(fileURLWithPath: path)
    guard let image = NSImage(contentsOf: url),
          let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else { continue }
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .fast
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    try? handler.perform([request])
    let results = request.results as? [VNRecognizedTextObservation] ?? []
    let text = results.compactMap { $0.topCandidates(1).first?.string }.joined(separator: " ")
    if !text.isEmpty {
        print("=== \(url.lastPathComponent) ===")
        print(text.prefix(400))
    }
}
